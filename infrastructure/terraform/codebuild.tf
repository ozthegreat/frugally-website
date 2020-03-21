# Stops a cyclic dependency between codebuild and cloudwatch.
locals {
  codebuild_build_name = "${local.resource_name}-build"
}

resource "aws_iam_role" "build" {
  name = "${local.resource_name}-codebuild-role-build"
  tags = local.tags

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "build" {
  role = aws_iam_role.build.name

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": [
        "${aws_cloudwatch_log_group.build.arn}*"
      ]
    },
    {
      "Effect":"Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion",
        "s3:GetBucketVersioning",
        "s3:PutObject"
      ],
      "Resource": [
        "${aws_s3_bucket.codepipline.arn}",
        "${aws_s3_bucket.codepipline.arn}/*"
      ]
    }
  ]
}
POLICY
}

resource "aws_cloudwatch_log_group" "build" {
  name = "/aws/codebuild/${local.codebuild_build_name}"
  retention_in_days = local.environment == "production" ? 400 : 3
  tags = local.tags
}

resource "aws_codebuild_project" "build" {
  name          = local.codebuild_build_name
  description   = "Builds ${local.resource_name}"
  build_timeout = "5"
  service_role  = aws_iam_role.build.arn
  tags          = local.tags

  depends_on = [aws_cloudwatch_log_group.build]

# Input
  source {
    type      = "CODEPIPELINE"
    buildspec = "buildspec_build.yml"
  }

  # Output
  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type  = "BUILD_GENERAL1_SMALL"
    image         = "aws/codebuild/standard:2.0"
    type          = "LINUX_CONTAINER"

    environment_variable {
      name  = "ENVIRONMENT"
      value = local.environment
    }
  }

  logs_config {
    cloudwatch_logs {
      group_name  = aws_cloudwatch_log_group.build.name
      status      = "ENABLED"
    }
  }

}