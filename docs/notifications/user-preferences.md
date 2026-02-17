---
hide_table_of_contents: true
sidebar_position: 4
---

# User Preferences

Individual users can customise their notification settings to control which notifications they receive, how they are delivered, and when they arrive. User preferences override team defaults for non-mandatory notifications.

---

## Accessing notification preferences

Navigate to **Settings** > **Notifications** > **My Preferences**, or click the notification bell icon in the dashboard and select **Preferences**.

---

## What you can customise

### Muting notifications

For any notification type that is not [mandatory](./team-policies.md), you can:

| Action | Effect |
|--------|--------|
| **Mute** | Stop receiving this notification entirely |
| **Unmute** | Resume receiving this notification |

Muted notifications are still logged in the notification centre — they just do not trigger alerts in Slack, email, or the in-app bell.

:::note
Mandatory notifications cannot be muted. They are marked with a lock icon in the preferences panel.
:::

---

### Channel preferences

Choose how each notification type is delivered to you:

| Channel | Options |
|---------|---------|
| **In-app** | Always on (cannot be disabled) |
| **Slack DM** | On or off — receive notifications as personal Slack DMs |
| **Email** | On or off — receive notifications by email |

Channel preferences are per notification type. For example, you can receive Execution results via Slack DM but mute them from email, while receiving budget alerts via both.

:::tip
If you find email notifications too noisy, switch to Slack DMs for day-to-day alerts and keep email enabled only for critical events like budget breaches and access changes.
:::

---

### Digest vs real-time

For each channel, choose between:

| Mode | Behaviour |
|------|-----------|
| **Real-time** | Notifications are delivered immediately when the event occurs |
| **Hourly digest** | Notifications are batched and delivered once per hour |
| **Daily digest** | Notifications are batched and delivered once per day |

| Setting | Description |
|---------|-------------|
| **Digest time** | For daily digests: choose when to receive them (default: 9 AM in your timezone) |
| **Digest day** | For weekly digests (if available): choose which day |

Digest mode is available for Slack DM and email. Channel notifications (posted to team channels) are always real-time.

---

## Notification centre

The in-app notification centre (bell icon in the dashboard header) shows all your notifications:

| Feature | Description |
|---------|-------------|
| **Unread count** | Badge showing the number of unread notifications |
| **Filter** | Filter by type (Automate, Intelligence, Guard, Team) |
| **Mark as read** | Mark individual or all notifications as read |
| **Click to navigate** | Click a notification to go to the related page (Execution detail, Budget, Project, etc.) |

---

## Managing notification overload

If you are receiving too many notifications:

1. **Mute low-priority types** — Disable notifications you do not need to act on (e.g. "Schedule created", "Scan completed")
2. **Switch to digests** — Batch non-urgent notifications into hourly or daily digests
3. **Use channel preferences** — Disable email for frequent events and rely on Slack DMs instead
4. **Talk to your Admin** — If team policies are too aggressive, ask your Admin to review the [team notification policies](./team-policies.md)

---

## Resetting preferences

Click **Reset to Defaults** at the bottom of the preferences page to revert all settings to the team policy defaults. This does not affect mandatory notifications (they remain enforced regardless).
