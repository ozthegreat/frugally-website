---
sidebar_position: 4
---

# 04 - Creating an IAM role

Now you've told frugally.app about the Accounts and Resources you'd like it to manage, you now need to grant it access to your Accounts. To do this you need to create an IAM Role frugally.app can use. You need to create this role inside **every AWS Account** you've told frugally.app about.

#### Creating the policy

The first step is to create the Policy for the Role.

Open your AWS console and navigate to the **IAM** console. Then slect **Policies** from the left hand menu. Then click [**Create Policy**](https://us-east-1.console.aws.amazon.com/iam/home#/policies$new?step=edit) on the top right hand side.

Select the **JSON** tab and paste in the below policy.

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
            "Resource": "*"
        }
    ]
}
```

This policy allows frugally.app to look up resources by tags as well as Describe, start, and stop EC2 instances. For extra security it is possible to restrict the policy even further should you wish. [IAM Role Permissions](iam-role-permissions).

Click **Next: Tags** to add any Tags you wish to the policy, or leave blank.

![IAM Policy Review](/img/iam-policy-review.png)

Click **Next: Review**. For the Policy name put in any identify you wish e.g. `FrugallyAccessPolicy`, add an optional description, then click **Create Policy**.

If you now do a search in your list of policies you should see the policy you just created.

#### Creating the Role

Slect **Roles** from the left hand menu. Then click [**Create Role**](https://us-east-1.console.aws.amazon.com/iamv2/home#/roles/create?step=selectEntities) on the top right hand side.

![Create AWS Role Screen](/img/aws-account-create-role.png)
_AWS IAM Roles_

**Trusted Entity Type** Select AWS Account.

Then select **Another AWS account** and for the **Account ID** field put `829513654501`. This is the ID of frugally.app's production AWS account and will allow only our account to access this Role.

Select **Require external ID** and for the value put the External ID that you set when you told frugally.app about the [AWS Account in Step 2](adding-an-account). This can be found again by navigating back to the frugally.app Accounts screen in Slack and click "Edit" next to the account you're adding. Note it will be different for every AWS Account you create the IAM Role in.

Click **Next** to proceed to the policies screen. Do a search for the name of the Policy you just created and select it.

![IAM Role Review Screen](/img/iam-roles-review-screen.png)

Click **Next** to proceed to the review screen. **Role name** needs to match exactly the **Role name** you entered when you added the AWS Account to frugally.app. If you changed it from the default (`FrugallyAccessRole`) you'll need to put your own value in. Optionally add a description, then scroll to the bottom and click **Create role**.

Congratulations, you should now have a Role frugally.app can use. Now on to the next step [Running an Execution](running-an-execution) to verify it all works.