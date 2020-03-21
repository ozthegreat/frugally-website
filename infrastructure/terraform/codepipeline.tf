# http://rayterrill.com/2019/01/18/AWS-CodePipeline-Deploy-to-S3-with-Terraform.html
# deploy notifications https://www.terraform.io/docs/providers/aws/r/codestarnotifications_notification_rule.html
# output articfact

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
      "Resource": "${aws_codebuild_project.build.arn}"
    }
  ]
}
EOF
}

resource "aws_codepipeline" "codepipeline" {
  name     = local.resource_name
  role_arn = aws_iam_role.codepipeline_role.arn

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
        Owner  = "ozthegreat"
        Repo   = "cloudsiren-website"
        Branch = local.environment
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
      output_artifacts = ["build_output"]
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
      input_artifacts = ["build_output"]
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
      input_artifacts = ["build_output"]
      version         = "1"

      configuration = {
        ProjectName = local.codebuild_invalidate_cache_name
      }
    }
  }

}
