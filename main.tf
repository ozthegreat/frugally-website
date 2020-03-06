terraform {
  required_version = ">= 0.12"
}

locals {
  environment           = "develop"
  aws_account_id        = "110871068631"
}

provider "aws" {
  allowed_account_ids = [local.aws_account_id]
  version             = "~> 2.14"
  region              = "eu-west-1"
  assume_role {
    role_arn     = "arn:aws:iam::${local.aws_account_id}:role/OrganizationAccountAccessRole"
    session_name = "Terraform"
  }
}
