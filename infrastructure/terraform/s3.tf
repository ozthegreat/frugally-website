resource "aws_s3_bucket" "website" {
  bucket = "${data.aws_caller_identity.current.account_id}-${local.resource_name}"
  acl    = "public-read"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm     = "AES256"
      }
    }
  }

  website {
    index_document = "index.html"
    error_document = "error.html"
  }

  tags = local.tags
}

resource "aws_s3_bucket_policy" "public" {
  bucket = aws_s3_bucket.website.id

  policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadGetObject",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["${aws_s3_bucket.website.arn}/*"
      ]
    }
  ]
}
POLICY
}
