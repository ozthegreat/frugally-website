---
sidebar_position: 2
---

# 02 - Adding an Account

The first step is tell frugally.app about your AWS Accounts you'd like it to have access to. 

You can open the **Accounts Screen** either:

a. **From the app homepage**: From within your Slack app, navigate to the Frugally app home screen. This is usually at the bottom of your conversations list in the side bar. Just click the **Frugally** app, then at the top of the screen click **Accounts**.

b. **From the shortcuts menu**: From within your Slack app, navigate to any conversation and click the little plus (+) icon next to left of the input text box. Select the **Browse all shortcuts** menu option. Select **Frugally**. Select **Accounts**.


![Accounts Screen](/img/accounts-screen.png)
_Accounts Screen_

This is a list of all your AWS Accounts that frugally.app knows about. Frugally.app can only manage Resources in AWS Accounts it's aware of so make sure you've added all your AWS Accounts.

When you're ready to add a new AWS Account, click the "Add account" button in the top right corner.

![Add Account Screen](/img/add-account-screen.png)
_Add Account Screen_

**Account Name** A friendly name for the account so you can identify it. E.g. develop.

**Account ID** The AWS ID for the Account. Can be found by opening the  AWS Account in your browser and clicking on the very top right menu.

**Role Name** The name of the Role in your AWS Account that frugally.app will try and assume. You can change it to be anything you wish.

**External ID** A random ID you can add to the IAM Role you created for frugally.app to assume to verify it is us who is assuming it. You can read more about External IDs in Roles in the [AWS documentaion](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html)

**Status** Whether this Account is active in frugally.app or not. At times you may want to quickly disable all actions running in an Account.


When you've completed the form, click **Save**.


![Accounts Screen Populated](/img/accounts-screen-populated.png)
_Accounts Screen with an Account Added_


Congratulations, you added your first Account. Now on to the next step [Adding a Resource](adding-a-resource.md).