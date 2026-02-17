---
hide_table_of_contents: true
sidebar_position: 2
---

# Supported Services

frugally.app supports six AWS services for automation. Each service has specific actions available and requires corresponding IAM permissions on the Connection's role.

---

## Service reference

| Service | Actions | Notes |
|---------|---------|-------|
| **EC2** | Start, Stop | Applies to instances only (not Spot or scheduled instances). Stopped instances retain their EBS volumes and Elastic IPs. |
| **RDS** | Start, Stop | Applies to DB instances and Multi-AZ deployments. Aurora clusters should be managed via the cluster endpoint. RDS instances cannot remain stopped for more than 7 days (AWS will auto-restart them). |
| **ECS** | Scale Up, Scale Down | Adjusts the desired task count on ECS services. Scale Down sets the count to 0; Scale Up restores it to the previously recorded count. |
| **Lambda** | Enable, Disable | Disables or enables event source mappings and triggers. The function itself is not deleted. |
| **NAT Gateway** | Create, Delete | Deletes NAT Gateways to eliminate hourly charges. Create restores them with the same configuration. Elastic IPs are preserved. |
| **VPC Endpoint** | Enable, Disable | Disables interface VPC endpoints to stop hourly charges. Gateway endpoints (S3, DynamoDB) are not charged and are excluded. |

---

## IAM permissions per service

Each service requires specific IAM actions on the Connection's role. The table below lists the minimum required permissions.

### EC2

```json
{
  "Effect": "Allow",
  "Action": [
    "ec2:DescribeInstances",
    "ec2:StartInstances",
    "ec2:StopInstances"
  ],
  "Resource": "*"
}
```

### RDS

```json
{
  "Effect": "Allow",
  "Action": [
    "rds:DescribeDBInstances",
    "rds:StartDBInstance",
    "rds:StopDBInstance"
  ],
  "Resource": "*"
}
```

### ECS

```json
{
  "Effect": "Allow",
  "Action": [
    "ecs:DescribeServices",
    "ecs:UpdateService",
    "ecs:ListServices",
    "ecs:ListClusters"
  ],
  "Resource": "*"
}
```

### Lambda

```json
{
  "Effect": "Allow",
  "Action": [
    "lambda:ListFunctions",
    "lambda:ListEventSourceMappings",
    "lambda:UpdateEventSourceMapping",
    "lambda:GetFunction"
  ],
  "Resource": "*"
}
```

### NAT Gateway

```json
{
  "Effect": "Allow",
  "Action": [
    "ec2:DescribeNatGateways",
    "ec2:CreateNatGateway",
    "ec2:DeleteNatGateway",
    "ec2:DescribeAddresses",
    "ec2:AllocateAddress",
    "ec2:AssociateAddress"
  ],
  "Resource": "*"
}
```

### VPC Endpoint

```json
{
  "Effect": "Allow",
  "Action": [
    "ec2:DescribeVpcEndpoints",
    "ec2:ModifyVpcEndpoint"
  ],
  "Resource": "*"
}
```

:::tip
For a complete IAM policy covering all services, see [IAM Role Permissions](/docs/advanced/iam-role-permissions). You can also restrict permissions to specific resources using tag-based conditions — see [Resource Tag Filtering](/docs/advanced/resource-tag-filtering).
:::

---

## Service-specific caveats

### RDS 7-day stop limit

AWS automatically restarts RDS instances that have been stopped for 7 consecutive days. frugally.app accounts for this by re-issuing the stop command on the next Schedule run. If you see an RDS instance temporarily running between Schedule cycles, this is expected behaviour.

### ECS task count persistence

When frugally.app scales an ECS service down to 0, it records the original desired task count. On Scale Up, it restores the service to that recorded count. If you manually change the desired count while the service is scaled down, the manual change takes precedence on the next Scale Up.

### NAT Gateway recreation

Deleting a NAT Gateway releases its private IP. When frugally.app recreates the NAT Gateway, it receives a new private IP. The Elastic IP is preserved and re-associated. Update any route tables that reference the NAT Gateway ID, as the ID will change on recreation.

:::note
If your workloads depend on a stable NAT Gateway ID (e.g. in route table references), consider using Schedules only during predictable downtime windows and verify routing after recreation.
:::
