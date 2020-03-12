variable "service" {
  type = string
  default = "marketing-website"
}

variable "aws_account_id" {
  default = {
    develop = "110871068631"
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

  tags = {
    Name         = local.resource_name
    Environment  = local.environment
    Project      = local.project
    Service      = local.service
    Provisioner  = local.provisioner
  }
}
