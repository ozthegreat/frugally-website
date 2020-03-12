
resource "aws_cloudfront_distribution" "website" {
  # web_acl_id      = var.aws_waf_web_acl[local.environment]
  # TEMP. Terraform doesn't support WAFv2 yet.
  lifecycle {
    ignore_changes = [
      web_acl_id
    ]
  }

  aliases             = [local.endpoint]
  enabled             = true
  is_ipv6_enabled     = true
  tags                = local.tags
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket.website.website_endpoint
    origin_id   = aws_s3_bucket.website.id

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
      origin_keepalive_timeout = 5
      origin_read_timeout      = 30
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = data.aws_acm_certificate.main.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2018"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = aws_s3_bucket.website.id

    forwarded_values {
      query_string = true

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000
    compress               = true
  }

  # CloudFron caches for ~15min by default. Let's reduce this.
  custom_error_response {
    error_code            = 404
    error_caching_min_ttl = 15
  }

  custom_error_response {
    error_code            = 500
    error_caching_min_ttl = 15
  }

  custom_error_response {
    error_code            = 502
    error_caching_min_ttl = 15
  }

  custom_error_response {
    error_code            = 503
    error_caching_min_ttl = 15
  }

  custom_error_response {
    error_code            = 504
    error_caching_min_ttl = 15
  }

}
