variable "service" {
  type = string
}

variable "environment" {
  type = string
}

variable "project" {
  type = string
}

variable "provisioner" {
  type    = string
  default = "terraform"
}


locals {
  resource_name = "${var.service}-${var.environment}"
  project      = var.project
  service      = var.service
  provisioner  = var.provisioner
  endpoint     = "develop.notcloudsiren.xyz"

  tags = {
    Name         = local.resource_name
    Environment  = local.environment
    Project      = local.project
    Service      = local.service
    Provisioner  = local.provisioner
  }
}
