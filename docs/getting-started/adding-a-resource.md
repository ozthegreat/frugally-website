---
sidebar_position: 3
---

# 03 - Adding a Resource

A Resource is a collection of instances in your AWS Account representing a service. For example you might have an Authentication API that's a collection of EC2s. You can carve up Resources in anyway you wish, whatever is most convenient for you when deciding what needs turning off and on.

You can open the **Resources Screen** either:

a. **From the app homepage**: From within your Slack app, navigate to the Frugally app home screen. This is usually at the bottom of your conversations list in the side bar. Just click the **Frugally** app, then at the top of the screen click **Resources**.

b. **From the shortcuts menu**: From within your Slack app, navigate to any conversation and click the little plus (+) icon next to left of the input text box. Select the **Browse all shortcuts** menu option. Select **Frugally**. Select **Resources**.

![Resources Screen](/img/resources-screen.png)
_Resources Screen_

This is a list of all your AWS Resources that frugally.app knows about. 

When you're ready to add a new Resources, click the "Add Resources" button in the top right corner.





![Add Resource Screen](/img/add-resource-screen.png)
_Add Resource Screen_

**Resource Name** A friendly name for the resource so you can identify it. E.g. API.

**AWS Regions** All the AWS Regions this resource exists in that you want frgually.app to manage.

**AWS Services** The type of AWS service(s) this Resource consists of.

**Tags** The tags that frugally.app will use to locate this resource. Tags should be entered one per line with a colon seperating the key and the value. You can read more about how tag filtering works [in this advanced guide](../advanced/resource-tag-filtering).
Example:
```
Environment:develop
Name:MyApi
```

**Status** Whether this Resource is active in frugally.app or not. At times you may want to quickly disable all actions running for a particular Resource.

When you've completed the form, click **Save**.


![Resources Screen Populated](/img/resources-screen-populated.png)
_Resources screen with a Resource Added_


Congratulations, you added your first Resources. Now on to the next step [Creating an IAM Role](creating-an-iam-role.md).