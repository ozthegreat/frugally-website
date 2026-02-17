---
hide_table_of_contents: true
sidebar_position: 9
---

# Data and Security

Common questions about how frugally.app handles your data, security practices, and compliance.

---

## What data does frugally.app access?

frugally.app accesses your AWS account via an IAM role that you create and control. The data accessed depends on which features you enable:

| Feature | Data accessed |
|---------|--------------|
| **Automate (stop/start)** | EC2, RDS, ECS, and other supported resource metadata (instance IDs, states, tags) |
| **Cost Explorer** | Aggregated cost and usage data from the AWS Cost Explorer API |
| **CloudTrail** | Trail configuration metadata (not log contents) |
| **CUR** | Cost and Usage Report definitions and data |

frugally.app does **not** access:

- Application data stored on your instances
- S3 object contents (beyond CUR report data)
- Secrets, credentials, or environment variables
- Network traffic or logs

---

## What permissions does frugally.app need?

frugally.app follows the principle of least privilege. The IAM role permissions are scoped to the specific actions needed for each feature. See [IAM Policy Reference](/docs/advanced/iam-role-permissions) for the full policy with per-service breakdowns.

You control the permissions — you can remove any permission you don't want to grant, though this may affect the features that depend on it.

---

## Where is my data stored?

| Data type | Storage location |
|-----------|-----------------|
| Team, user, and configuration data | AWS infrastructure in the EU (London region) |
| Cost and usage data | AWS infrastructure in the EU (London region) |
| Execution logs | AWS infrastructure in the EU (London region) |
| Payment information | Processed by Stripe — frugally.app does not store card details |

---

## Is my data encrypted?

| State | Encryption |
|-------|-----------|
| **In transit** | TLS 1.2+ for all API and web traffic |
| **At rest** | AES-256 encryption for all stored data |
| **IAM credentials** | Temporary credentials only — frugally.app uses `sts:AssumeRole` and never stores long-term AWS credentials |

---

## Can frugally.app modify my AWS resources?

Only if you explicitly grant permission. frugally.app can stop, start, or scale resources **only** for the services included in the IAM policy you attach to the role. You can remove any action permission to prevent modifications.

frugally.app never creates or deletes AWS resources (other than stopping/starting existing ones).

---

## Who can access my data in frugally.app?

Access is controlled by your team's role and scope configuration:

- **Roles** determine what actions a user can perform. See [Roles and Permissions](/docs/roles-and-access/roles-and-permissions).
- **Scopes** limit which Connections and resources a user can see. See [Scopes](/docs/roles-and-access/scopes).
- **SSO enforcement** ensures only users authenticated via your identity provider can access the team. See [Security Settings](/docs/team-management/security-settings).

---

## Does frugally.app share my data with third parties?

No. frugally.app does not sell, share, or provide your data to third parties. Data is only used to deliver the frugally.app service.

For full details, see the [Privacy Policy](https://frugally.app/privacy).

---

## What happens to my data if I cancel?

- All data is permanently deleted within 30 days of account deletion.
- Invoices are retained for 7 years for legal and tax compliance.
- See [How do I cancel or remove frugally.app?](how-to-cancel-remove-frugally-app.md) for the full cancellation process.

---

## Compliance and certifications

For questions about specific compliance requirements (SOC 2, GDPR, ISO 27001, etc.), contact [support@frugally.app](mailto:support@frugally.app).

---

## Responsible disclosure

If you discover a security vulnerability, please report it to [security@frugally.app](mailto:security@frugally.app). We take security reports seriously and will respond promptly.
