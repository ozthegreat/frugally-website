---
hide_table_of_contents: true
sidebar_position: 6
---

# Slack Integration

This page covers troubleshooting for the Slack integration — slash commands, AI intent, Home Tab, and reinstallation.

---

## Slash commands not responding

### `/frugally` returns no response

**Checklist:**

| Check | Action |
|-------|--------|
| **App installed** | Verify frugally.app is installed in your Slack workspace. Check **Apps** in the Slack sidebar |
| **App not disabled** | Workspace admins can disable apps. Check **Slack Admin** > **Manage Apps** |
| **Channel permissions** | Some workspaces restrict apps to specific channels. Try the command in a different channel |
| **Integration connected** | In the frugally.app dashboard, go to **Settings** > **Integrations** > **Slack** and verify the status is **Connected** |

### `/frugally` returns "Something went wrong"

**Cause:** The command reached frugally.app but encountered an error.

**Steps:**
1. Try the command again — it may have been a transient error.
2. Check the [status page](https://status.frugally.app) for ongoing incidents.
3. If the error persists, try a simpler command (e.g. `/frugally help`) to verify basic connectivity.

### Slash command response is slow

**Cause:** Slack has a 3-second timeout for initial responses. If frugally.app needs to query AWS, it sends an initial acknowledgement and follows up with the full response.

If the follow-up response never arrives:
1. Check Connection health — the AWS query may have failed.
2. Verify the bot has permission to post in the channel (it needs to be a member or the channel must allow app posts).

---

## AI intent issues

### AI intent not understanding queries

**Symptom:** Using `@frugally` mentions or natural language queries returns incorrect or "I don't understand" responses.

**Tips for better results:**
- Be specific: "What's my EC2 spend this month?" works better than "How much am I spending?"
- Include the resource type or service name when asking about costs.
- Use simple, direct questions rather than compound queries.

### AI intent not responding to @mentions

**Checklist:**
1. Ensure you are using `@frugally` (not `/frugally`) to trigger AI intent.
2. The bot must be a member of the channel. Invite it with `/invite @frugally`.
3. Check that AI intent is enabled in **Settings** > **Integrations** > **Slack**.

---

## Home Tab issues

### Home Tab not loading

**Symptom:** Clicking the frugally.app Home Tab in Slack shows a blank page or loading spinner.

**Steps:**
1. **Close and reopen** the Home Tab — click away and click back.
2. **Update Slack** — Ensure you are running the latest version of the Slack desktop or mobile app.
3. **Check permissions** — The Home Tab requires the `app_home` scope. If the app was installed before this feature was added, you may need to re-authorise. See [Reinstalling the Slack App](#reinstalling-the-slack-app) below.

### Home Tab showing stale data

**Cause:** The Home Tab refreshes when you navigate to it, but data may be cached briefly.

**Steps:**
1. Navigate away from the Home Tab and back to force a refresh.
2. If data remains stale, check the relevant dashboard page to confirm the current state.

---

## Notification delivery issues

### Execution results not posting to Slack

**Checklist:**

| Check | Action |
|-------|--------|
| **Slack channel configured** | Open the Schedule and verify a Slack channel is selected |
| **Bot is in the channel** | The frugally.app bot must be a member of the channel. Invite it with `/invite @frugally` |
| **Channel not archived** | Archived channels cannot receive messages. Unarchive or select a different channel |
| **Integration connected** | Check **Settings** > **Integrations** > **Slack** for connection status |

### Messages posting to the wrong channel

**Cause:** Each Schedule has its own Slack channel setting. Check the Schedule configuration to verify the correct channel is selected.

---

## Reinstalling the Slack App

If the Slack integration is in a broken state, reinstalling can resolve most issues:

1. **Remove the app** from your Slack workspace:
   - Go to **Slack Admin** > **Manage Apps** > **frugally.app** > **Remove App**.
2. **Disconnect in frugally.app**:
   - Go to **Settings** > **Integrations** > **Slack** > **Disconnect**.
3. **Reinstall**:
   - Go to **Settings** > **Integrations** > **Slack** > **Connect to Slack**.
   - Authorise the app in your workspace.
   - Re-select Slack channels on your Schedules (these are cleared on disconnect).

:::caution
Reinstalling the Slack App clears all channel assignments on Schedules. You will need to reconfigure which Schedules post to which channels.
:::

---

## Still stuck?

Collect the following and contact [support@frugally.app](mailto:support@frugally.app):

- Slack workspace name
- Channel where the issue occurs
- The command or action that failed
- Any error messages shown in Slack
