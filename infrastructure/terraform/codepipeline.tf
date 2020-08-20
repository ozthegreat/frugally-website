# http://rayterrill.com/2019/01/18/AWS-CodePipeline-Deploy-to-S3-with-Terraform.html

resource "aws_s3_bucket" "artifacts" {
  bucket = "${data.aws_caller_identity.current.account_id}-${local.resource_name}-artifacts"
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm     = "AES256"
      }
    }
  }

  lifecycle_rule {
    id      = "expire"
    enabled = true

    transition {
      days          = 30
      storage_class = "ONEZONE_IA"
    }

    expiration {
      days = 90
    }
  }

  tags = local.tags
}

resource "aws_s3_bucket_public_access_block" "artifacts" {
  bucket = aws_s3_bucket.artifacts.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_iam_role" "codepipeline_role" {
  name = "${local.resource_name}-codepipline-role"
  tags = local.tags
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codepipeline.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "codepipeline_policy" {
  name = "${local.resource_name}-codepipline-policy"
  role = aws_iam_role.codepipeline_role.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect":"Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetBucketVersioning",
        "s3:PutObject"
      ],
      "Resource": [
        "${aws_s3_bucket.artifacts.arn}",
        "${aws_s3_bucket.artifacts.arn}/*",
        "${aws_s3_bucket.website.arn}",
        "${aws_s3_bucket.website.arn}/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "codebuild:BatchGetBuilds",
        "codebuild:StartBuild"
      ],
      "Resource": [
        "${aws_codebuild_project.build.arn}",
        "${aws_codebuild_project.invalidate_cache.arn}"
      ]
    }
  ]
}
EOF
}

resource "aws_codestarnotifications_notification_rule" "codepipeline" {
  name        = local.resource_name
  resource    = aws_codepipeline.codepipeline.arn
  detail_type = "BASIC"
  tags        = local.tags
  event_type_ids = [
    "codepipeline-pipeline-pipeline-execution-started",
    "codepipeline-pipeline-pipeline-execution-failed",
    "codepipeline-pipeline-pipeline-execution-canceled",
    "codepipeline-pipeline-pipeline-execution-succeeded"
  ]

  target {
    address = data.aws_sns_topic.alerts.arn
  }
}

resource "random_password" "webhook_secret" {
  length = 32
  special = false
}

resource "aws_codepipeline_webhook" "webhook" {
  name            = "${local.resource_name}_webhook."
  authentication  = "GITHUB_HMAC"
  target_action   = "Source"
  target_pipeline = aws_codepipeline.codepipeline.name

  authentication_configuration {
    secret_token = random_password.webhook_secret.result
  }

  filter {
    json_path    = "$.ref"
    match_equals = "refs/heads/{Branch}"
  }
}

resource "github_repository_webhook" "webhook" {
  repository = split("/", var.project)[1]
  active = true

  configuration {
    url          = aws_codepipeline_webhook.webhook.url
    content_type = "json"
    insecure_ssl = false
    secret       = random_password.webhook_secret.result
  }

  events = ["push", "pull_request"]
}

resource "aws_codepipeline" "codepipeline" {
  name     = local.resource_name
  role_arn = aws_iam_role.codepipeline_role.arn
  tags     = local.tags

  artifact_store {
    location = aws_s3_bucket.artifacts.bucket
    type     = "S3"

    # encryption_key {
    #   id   = "${data.aws_kms_alias.s3kmskey.arn}"
    #   type = "KMS"
    # }
  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "ThirdParty"
      provider         = "GitHub"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        Owner  = split("/", var.project)[0]
        Repo   = split("/", var.project)[1]
        Branch = var.branch[local.environment]
        PollForSourceChanges = "false"
      }
    }
  }

  stage {
    name = "Build"

    action {
      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      version          = "1"
      input_artifacts = ["source_output"]
      output_artifacts = ["artifact1", "artifact2"]
      configuration = {
        ProjectName = local.codebuild_build_name
      }

    }
  }

  stage {
    name = "Deploy"

    action {
      name            = "Deploy"
      category        = "Deploy"
      owner           = "AWS"
      provider        = "S3"
      input_artifacts = ["artifact1"]
      version         = "1"

      configuration = {
        BucketName = aws_s3_bucket.website.bucket
        Extract = "true"
      }

    }
  }

  stage {
    name = "PostDeploy"

    action {
      name            = "PostDeploy"
      category        = "Build"
      owner           = "AWS"
      provider        = "CodeBuild"
      input_artifacts = ["artifact2"]
      version         = "1"

      configuration = {
        ProjectName = local.codebuild_invalidate_cache_name
      }
    }
  }

}
