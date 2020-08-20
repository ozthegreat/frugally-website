variable "service" {
  type = string
  default = "marketing-website"
}

variable "aws_account_id" {
  default = {
    develop = "110871068631"
    production = "785901052357"
  }
}

variable "project" {
  type = string
  default = "ozthegreat/cloudsiren-website"
}

variable "provisioner" {
  type    = string
  default = "terraform"
}

variable "endpoint" {
  default = {
    production = "cloudsiren.io"
    develop = "cloudsiren.dev"
  }
}

locals {
  aws_account_id = var.aws_account_id[terraform.workspace]
  environment    = terraform.workspace
  resource_name  = "${var.service}-${local.environment}"
  project        = var.project
  service        = var.service
  provisioner    = var.provisioner
  endpoint       = var.endpoint[local.environment]
  domain         = var.endpoint[local.environment]
  codebuild_build_name = "${local.resource_name}-build"
  codebuild_invalidate_cache_name = "${local.resource_name}-invalidate-cache"

  tags = {
    Name         = local.resource_name
    Environment  = local.environment
    Project      = local.project
    Service      = local.service
    Provisioner  = local.provisioner
  }
}
