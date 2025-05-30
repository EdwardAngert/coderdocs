---
title: Your first template
description: A common way to create a template is to begin with a starter template then
version: main
audience: all
---
# Your first template

A common way to create a template is to begin with a starter template then
modify it for your needs. Coder makes this easy with starter templates for
popular development targets like Docker, Kubernetes, Azure, and so on. Once your
template is up and running, you can edit it in the Coder dashboard. Coder even
handles versioning for you so you can publish official updates or revert to
previous versions.

In this tutorial, you'll create your first template from the Docker starter
template.

## Before you start

Use the [previous section](./local-deploy) of this guide to set up
[Docker](https://docs.docker.com/get-docker/) and [Coder](../install/cli) on
your local machine to continue.

## 1. Log in to Coder

In your web browser, go to your Coder dashboard using the URL provided during
setup to log in.

## 2. Choose a starter template

Select **Templates** to see the **Starter Templates**. Use the **Docker
Containers** template by pressing **Use Template**.

![Starter Templates UI](%images/%images/./images/start/starter-templates.png)

You can also a find a comprehensive list of starter templates in **Templates**
-> **Create Template** -> **Starter Templates**. s

## 3. Create your template

In **Create template**, fill in **Name** and **Display name**, then select
**Create template**.

![Creating a template](%images/%images/./images/start/create-template.png)

TODO:

- add CLI guide for making a new template
- refactor text below to be more beginner-friendly

<!-- ## 4. Create a workspace from your template

When the template is ready, select **Create Workspace**.

![Template Preview](%images/%images/./images/start/template-preview.png)

In **New workspace**, fill in **Name** then scroll down to select **Create
Workspace**.

![Create Workspace](%images/%images/./images/start/create-workspace.png)

Coder starts your new workspace from your template.

After a few seconds, your workspace is ready to use.

![Workspace is ready](%images/%images/./images/templates/workspace-ready.png)

## 5. Try out your new workspace

This starter template lets you connect to your workspace in a few ways:

- VS Code Desktop: Loads your workspace into
  [VS Code Desktop](https://code.visualstudio.com/Download) installed on your
  local computer.
- code-server: Opens [browser-based VS Code](../ides/web-ides) with your
  workspace.
- Terminal: Opens a browser-based terminal with a shell in the workspace's
  Docker instance.
- SSH: Use SSH to log in to the workspace from your local machine. If you
  haven't already, you'll have to install Coder on your local machine to
  configure your SSH client.

> [!TIP]
> You can edit the template to let developers connect to a workspace in
> [a few more ways](../ides).

When you're done, you can stop the workspace. -->

## 6. Modify your template

Now you can modify your template to suit your team's needs.

Let's replace the `golang` package in the Docker image with the `python3`
package. You can do this by editing the template's `Dockerfile` directly in your
web browser.

In the Coder dashboard, select **Templates** then your first template.

![Selecting the first template](%images/%images/./images/templates/select-template.png)

In the drop-down menu, select **Edit files**.

![Edit template files](%images/%images/./images/templates/edit-files.png)

Expand the **build** directory and select **Dockerfile**.

![Selecting source code](%images/%images/./images/templates/source-code.png)

Edit `build/Dockerfile` to replace `golang` with `python3`.

![Editing source code](%images/%images/./images/templates/edit-source-code.png)

Select **Build template** and wait for Coder to prepare the template for
workspaces.

![Building a template](%images/%images/./images/templates/build-template.png)

Select **Publish version**. In the **Publish new version** dialog, make sure
**Promote to active version** is checked then select **Publish**.

![Publish a template](%images/%images/./images/templates/publish.png)

Now when developers create a new workspace from this template, they can use
Python 3 instead of Go.

For developers with workspaces that were created with a previous version of your
template, Coder will notify them that there's a new version of the template.

You can also handle
[change management](../admin/templates/managing-templates/change-management)
through your own repo and continuous integration.

## Next steps

- [Setting up templates](../admin/templates/creating-templates)
