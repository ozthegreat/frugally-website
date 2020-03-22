resource "aws_iam_role" "invalidate_cache" {
  name = "${local.resource_name}-codebuild-role-invalidate-cache"
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

resource "aws_iam_role_policy" "invalidate_cache" {
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
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": [
        "${aws_cloudfront_distribution.website.arn}*"
      ]
    }
  ]
}
POLICY
}

resource "aws_cloudwatch_log_group" "invalidate_cache" {
  name = "/aws/codebuild/${local.codebuild_invalidate_cache_name}"
  retention_in_days = local.environment == "production" ? 400 : 3
  tags = local.tags
}

resource "aws_codebuild_project" "invalidate_cache" {
  name          = local.codebuild_invalidate_cache_name
  description   = "Invalidates CloudFront cache for ${local.resource_name}"
  build_timeout = "5"
  service_role  = aws_iam_role.invalidate_cache.arn
  tags          = local.tags

# Input
  source {
    type      = "CODEPIPELINE"
    buildspec = "buildspec_invalidate_cache.yml"
  }

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type  = "BUILD_GENERAL1_SMALL"
    image         = "aws/codebuild/amazonlinux2-x86_64-standard:3.0"
    type          = "LINUX_CONTAINER"

    environment_variable {
      name  = "ENVIRONMENT"
      value = local.environment
    }

    environment_variable {
      name  = "CLOUDFRONT_DISTRIBUTION_ID"
      value = aws_cloudfront_distribution.website.id
    }
  }

  logs_config {
    cloudwatch_logs {
      group_name  = aws_cloudwatch_log_group.build.name
      status      = "ENABLED"
    }
  }

}