---
hide_table_of_contents: true
sidebar_position: 1
---

# What AWS resources do you support?

frugally.app supports a wide range of AWS services for stop/start scheduling, scaling, and cost analysis.

---

## Supported services summary

| Service | Actions | Notes |
|---------|---------|-------|
| **EC2** | Stop, Start, Terminate | All instance types including Linux, Windows, shared tenancy, dedicated tenancy |
| **RDS** | Stop, Start | Single-AZ and Multi-AZ instances, Aurora clusters |
| **ECS** | Scale down, Scale up | Fargate and EC2 launch types — adjusts desired task count |
| **Auto Scaling Groups** | Scale down, Scale up | Adjusts min/max/desired capacity |
| **EKS** | Scale node groups | Adjusts managed node group sizes |
| **Redshift** | Pause, Resume | Serverless and provisioned clusters |
| **SageMaker** | Stop, Start | Notebook instances and endpoints |
| **DocumentDB** | Stop, Start | Cluster-level stop/start |
| **Neptune** | Stop, Start | Cluster-level stop/start |

For the full list with per-service details, required IAM permissions, and limitations, see [Supported Services](/docs/automate/targets/supported-services).

---

## Cost analysis coverage

Beyond stop/start scheduling, frugally.app analyses costs across **all AWS services** via Cost Explorer and CUR integration. This means you can track and budget for services like S3, Lambda, CloudFront, and DynamoDB even if they are not supported for stop/start actions.

See [Cost Explorer](/docs/intelligence/cost-explorer) and [Commitment Utilisation](/docs/intelligence/commitment-utilisation) for more on cost analysis.

---

## Requesting new services

If you need support for an AWS service not listed above, contact [support@frugally.app](mailto:support@frugally.app). New service support is prioritised based on customer demand.
