data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

data "aws_sns_topic" "alerts" {
  name = "alerts-${local.environment}"
}

data "aws_acm_certificate" "main" {
  domain   = local.domain
  statuses = ["ISSUED"]
  provider = aws.us_east_1
}

data "aws_route53_zone" "webapp" {
  provider     = aws.dns
  name         = "${local.domain}."
  private_zone = false
}
