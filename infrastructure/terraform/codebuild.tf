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
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "ec2:CreateNetworkInterface",
        "ec2:DescribeDhcpOptions",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DeleteNetworkInterface",
        "ec2:DescribeSubnets",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeVpcs"
      ],
      "Resource": "*"
    }
  ]
}
POLICY
}


resource "aws_codebuild_project" "build" {
  name          = "${local.resource_name}-build"
  description   = "Builds ${local.resource_name}"
  build_timeout = "5"
  service_role  = "${aws_iam_role.build.arn}"
  tags          = local.tags

  artifacts {
    type = "CODEPIPELINE"
  }

#   cache {
#     type     = "S3"
#     location = "${aws_s3_bucket.example.bucket}"
#   }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/standard:1.0"
    type                        = "LINUX_CONTAINER"

    environment_variable {
      name  = "ENVIRONMENT"
      value = local.environment
    }
  }

  logs_config {
    cloudwatch_logs {
    #   group_name  = "log-group"
    }

#     s3_logs {
#       status   = "ENABLED"
#       location = "${aws_s3_bucket.example.id}/build-log"
#     }
#   }

  source {
    type            = "CODEPIPELINE"
  }

  source_version = "master"
}