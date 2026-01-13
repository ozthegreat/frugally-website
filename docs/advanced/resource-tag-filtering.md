---
hide_table_of_contents: true
---

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

You can optionally only specify a tag key. It will match every instance with that key regardless of value.

```
Environment
```
*This example will return EC2 instances that have the Environment tag set with any value.*

You can also specify multiple tag values using a `,` to separate them. Multiple tag values work on an `or` basis, meaning it will match every instance that has at least one of the values.

```
Environment:develop,staging
```
*This example will return EC2 instances that have the Environment tag set with a value of either develop or staging.*

```
Live
Environment:develop,staging
```
*This example will return EC2 instances that have the Live tag set with any value AND the Environment tag set with a value of either develop or staging.*