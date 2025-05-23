---
title: Create a Coder template for agents
description: 'Coder has first-class support for managing agents through Github, but can also'
version: main
audience: all
---
# Create a Coder template for agents

> [!NOTE]
>
> This functionality is in early access and is evolving rapidly.
>
> For now, we recommend testing it in a demo or staging environment,
> rather than deploying to production.
>
> Join our [Discord channel](https://discord.gg/coder) or
> [contact us](https://coder.com/contact) to get help or share feedback.

## Overview

Coder has first-class support for managing agents through Github, but can also
integrate with other issue trackers. Use our action to interact with agents
directly in issues and PRs.

## Prerequisites

- A Coder deployment with v2.21 or later
- A [template configured for AI agents](./create-template)

## GitHub

### GitHub Action

The [start-workspace](https://github.com/coder/start-workspace-action) GitHub
action will create a Coder workspace based on a specific phrase in a comment
(e.g. `@coder`).

![GitHub Issue](%images/%images/./images/guides/ai-agents/github-action.png)

When properly configured with an [AI template](./create-template), the agent
will begin working on the issue.

### Pull Request Support (Coming Soon)

We're working on adding support for an agent automatically creating pull
requests and responding to your comments. Check back soon or
[join our Discord](https://discord.gg/coder) to stay updated.

![GitHub Pull Request](%images/%images/./images/guides/ai-agents/github-pr.png)

## Integrating with Other Issue Trackers

While support for other issue trackers is under consideration, you can can use
the [REST API](../reference/api/index) or [CLI](../reference/cli/index) to integrate
with other issue trackers or CI pipelines.

In addition, an [Open in Coder](../admin/templates/open-in-coder) flow can
be used to generate a URL and/or markdown button in your issue tracker to
automatically create a workspace with specific parameters.

## Next Steps

- [Best practices & adding tools via MCP](./best-practices)
- [Supervise Agents in the UI](./coder-dashboard)
- [Supervise Agents in the IDE](./ide-integration)
- [Supervise Agents Programmatically](./headless)
- [Securing Agents with Boundaries](./securing)
