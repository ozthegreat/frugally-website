terraform {
  required_version = ">= 0.12"

  backend "s3" {
    bucket               = "045773692280-terraform-state"
    key                  = "cloudsiren-website/terraform.tfstate"
    region               = "eu-west-1"
    dynamodb_table       = "TerraformLockTable"
    role_arn             = "arn:aws:iam::045773692280:role/TerraformState"
  }
}

provider "aws" {
  allowed_account_ids = [local.aws_account_id]
  version             = "~> 2"
  region              = "eu-west-1"
  assume_role {
    role_arn     = "arn:aws:iam::${local.aws_account_id}:role/OrganizationAccountAccessRole"
    session_name = "Terraform"
  }
}

provider "aws" {
  allowed_account_ids = [local.aws_account_id]
  version             = "~> 2"
  region              = "us-east-1"
  alias               = "us_east_1"
  assume_role {
    role_arn     = "arn:aws:iam::${local.aws_account_id}:role/OrganizationAccountAccessRole"
    session_name = "Terraform"
  }
}

provider "aws" {
  version             = "~> 2"
  region              = "eu-west-1"
  alias               = "dns"
  assume_role {
    role_arn     = "arn:aws:iam::287208998484:role/OrganizationAccountAccessRole"
    session_name = "Terraform"
  }
}

# Configure the GitHub Provider.
# token from GITHUB_TOKEN env var (required by codepipline)
provider "github" {
  version    = "2.4.0"
  individual = false
  organization = split("/", var.project)[0]
}