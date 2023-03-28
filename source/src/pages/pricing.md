---
title: Pricing
---

# Pricing

With frugally.app you are billed **per execution per instance**. The amount billed is equal to one on-demand hour for the instance the execution is running against. One execution is when frugally.app triggers a state change against an instance.

The **maximum amount** frugally.app will ever charge **per instance** is for 120 executions per month, regardless of how many executions are actually carried out against that instance.

**Your frugally.app bill will never be more than the amount we save on your AWS bill**


<br />

### Example
A single EC2 instance (Linux, m5.large) running in the Ohio (us-east-2) region. A standard schedule is setup with frugally.app that turns the instance on every weekday at 8am, and turns it off every night at 8pm. It's off all weekend, and there have been no manual executions.

**Without frugally.app**

```
// Total AWS Cost (per month)
$72.576 = 24 (hours) * 7 (days) * 4.5 (~weeks per month) * $0.096 (cost per hour)
````


**With frugally.app**

```
// Total AWS Cost (per month)
$25.92 = 12 (hours) x 5 (days) * 4.5 (~weeks per month) * $0.096 (cost per hour)

// frugally.app Cost (per month)
$4.36 = 2 (executions per day) X 5 (days) * 4.5 (~weeks in a month) x $0.096 (cost per hour)
```
<!-- 

### Example 2

In this more complicated example we have 12 Linux instances in Ohio (us-east-2). 4 X c6a.xlarge ($0.153), 2 X m6g.medium ($0.0385), 6 x t4g.medium ($0.0336). A standard schedule is setup with frugally.app that turns the instance on every weekday at 8am, and turns it off every night at 8pm. However, 5 nights this month the environment was manually restarted again and left up all night.

**Without frugally.app**

```
$0.8906 per hour cost = (4 * $0.153) + (2 x $0.0385) + (6 * $0.0336)

// Total AWS Cost (per month)
$673.29 = 24 (hours) * 7 (days) * 4.5 (~weeks per month) * $0.8906 (cost per hour)
````


**With frugally.app**

```
$0.8906 per hour cost = (4 * $0.153) + (2 x $0.0385) + (6 * $0.0336)

// AWS cost week left running
$106.872 = 24 * 5 * $0.8906

// AWS cost remainng
$187.026 = 12 (hours) x 5 (days) * 3.5 (~weeks left per month) * $0.8906 (cost per hour)

// Total AWS Cost (per month)
$293.90 = $106.872 + $187.026

// frugally.app cost week left running
$17.182 = 4 (executions per day) X 5 (days) x $0.8906 (cost per hour)


$31.171 = 2 (executions per day) X 5 (days) * 3.5 (~weeks in a month) x $0.8906 (cost per hour)
``` -->