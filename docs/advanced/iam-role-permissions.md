---
hide_table_of_contents: true
sidebar_position: 1
---

# Advanced IAM Policy

## Tag restrictions
For extra security it is possible to use tags in the IAM policy you setup to restrict frugally.app to exactly the resources you want it to control.

Take the IAM policy from the [Getting Started](../getting-started/creating-an-iam-role) section, we can apply a condition to it to restrict the policy to only resources tagged with  `Environment:develop`.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "ec2:DescribeInstances",
                "tag:GetResources",
                "ec2:StartInstances",
                "ec2:StopInstances"
            ],
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                  "aws:ResourceTag/Environment": "develop"
                }
            }
        }
    ]
}
```


:::caution
Ensure the tags in the IAM Policy exactly match those set on the resource in frugally.app in every AWS account you want it to execute in.
:::

You can read more about controlling access to AWS resources in IAM using tags in the official [documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html)