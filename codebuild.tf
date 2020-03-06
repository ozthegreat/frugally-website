resource "aws_iam_role" "marketing_website" {
  name = local.resource_name
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

resource "aws_iam_role_policy" "marketing_website" {
  role = aws_iam_role.marketing_website.name

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
    }
  ]
}
POLICY
}

resource "aws_codebuild_project" "marketing_website" {
  name          = local.resource_name
  description   = "blah"
#   build_timeout = "60"
  service_role  = aws_iam_role.marketing_website.arn
  tags = local.tags

  artifacts {
    type = "CODEPIPELINE"
  }

#   cache {
#     type     = "S3"
#     location = "${aws_s3_bucket.example.bucket}"
#   }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:2.0"
    type                        = "LINUX_CONTAINER"

    # environment_variable {
    #   name  = "SOME_KEY1"
    #   value = "SOME_VALUE1"
    # }

    # environment_variable {
    #   name  = "SOME_KEY2"
    #   value = "SOME_VALUE2"
    #   type  = "PARAMETER_STORE"
    # }
  }

#   logs_config {
#     cloudwatch_logs {
#       group_name = "log-group"
#       stream_name = "log-stream"
#     }

#     s3_logs {
#       status = "ENABLED"
#       location = "${aws_s3_bucket.example.id}/build-log"
#     }
#   }

  source {
    type            = "CODEPIPELINE"
  }

}
