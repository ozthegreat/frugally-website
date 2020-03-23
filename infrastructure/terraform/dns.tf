# We really don't need request logging for a static website.
resource "aws_route53_record" "webapp" {
  provider = aws.dns
  zone_id  = data.aws_route53_zone.webapp.zone_id
  name     = local.endpoint
  type     = "A"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "webapp_aaaa" {
  provider = aws.dns
  zone_id  = data.aws_route53_zone.webapp.zone_id
  name     = local.endpoint
  type     = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.website.domain_name
    zone_id                = aws_cloudfront_distribution.website.hosted_zone_id
    evaluate_target_health = false
  }
}
