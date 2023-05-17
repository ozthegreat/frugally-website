# How do I use Tags to filter the resources?

A Resource in frugally.app represents one or many resources in your AWS Accounts. You can use Tags to tell frugally.app about the Resources in AWS you wish for it to manage.

- Tags are entered in the format `Key:Value`, with each new line representing a new key pair.
- A maximum of 50 tag lines can be specified.
- Tag lines work on an `and` basis. i.e. it will only return resources that have all the matching keys.

```
Environment:develop
Name:user-api
```
*This example will only return EC2 instances tagged with both sets of tags*


It is currently not possible to locate resources by `key` alone. It is a feature on our roadmap but please do get intouch and let us know if it's something that would be helpful.