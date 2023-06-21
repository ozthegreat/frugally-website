---
title: OAuth Permissions
---

# OAuth Permissions



### OAuth App Permissions

The following permissions are requested by the frugally app when it is added to a Slack workspace.

#### commands
Allows frugally to trigger shortcuts via slash commands and to be added to the shortcuts menu.

#### im:write
Allows the frugally app to send results in direct messages to users.

#### chat:write
Allows frugally to post results in approved channels/groups.

#### channels:join
Users can request the results of an execution or summary to be published to public channels. This allows frugally to join those channels when requested.

#### app_mentions:read
Allows frugally to read messages in public channels where it has been directly mentioned.

#### team:read
Allows frugally to view information about the current workspace so it can add them to frugally.app and setup billing.

#### users:read
Allows frugally to see information about users that trigger actions as well as the user that installed the app. Used for billing and event logging.

#### channels:read
Allows frugally to view basic info about public channels users might want it to post results in.

#### groups:read
Allows frugally to view basic info about groups users might want it to post results in.

#### mpim:read
Allows frugally to view basic info about group direct messages users might want it to post results in.

#### im:read
Allows frugally to view basic info about group direct messages users might want it to post results in or join.

### OAuth User Permissions

The following OAuth User permissions are requested when Users signin to the dashboard at https://app.frugally.app.
These are need to authenticate the user with Slack, complete the OAuth flow, and create the user in our system.

### identity.basic
### identity.email
### openid
### profile