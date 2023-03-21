---
title: OAuth Permissions
---

# OAuth Permissions



### OAuth App Permissions

The following permissions are requested by the frugally app when it is added to a Slack workspace.

#### commands
Adds the frugally shortcuts to the shortcuts menu and the `/frugally` slash command to your workspace.

#### im:write
Allows the frugally app to send direct messages to users.

#### chat:write
Allows messages to be posted in approved channels/groups.

#### channels:join
Allows the frugally app to join public channels.

#### app_mentions:read
Allows the frugally app to read messages in public channels where it has been directly mentioned.

#### team:read
Get information about the current workspace.

#### users:read
View information about authorized users.

#### channels:read
View basic information about public channels.

#### groups:read
View basic information about private groups the frugally app has been invited to.

#### mpim:read
View basic information about group direct messages the frugally app has been invited to.

#### im:read
View basic information about direct messages with the frugally app.

#### workflow.steps:execute
Allows frugally to create workflows.

### OAuth User Permissions

The following OAuth User permissions are requested when Users signin to the dashboard at https://app.frugally.app.
These are need to authenticate the user with Slack, complete the OAuth flow, and create the user in our system.

`openid`, `profile`, `email`