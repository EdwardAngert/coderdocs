---
title: templates
description: Manage templates
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# templates

Manage templates

Aliases:

* template

## Usage

```console
coder templates
```

## Description

```console
Templates are written in standard Terraform and describe the infrastructure for workspaces
  - Create or push an update to the template. Your developers can update their
workspaces:

     $ coder templates push my-template
```

## Subcommands

| Name                                             | Purpose                                                                          |
|--------------------------------------------------|----------------------------------------------------------------------------------|
| [<code>create</code>](./templates_create)     | DEPRECATED: Create a template from the current directory or as specified by flag |
| [<code>edit</code>](./templates_edit)         | Edit the metadata of a template by name.                                         |
| [<code>init</code>](./templates_init)         | Get started with a templated template.                                           |
| [<code>list</code>](./templates_list)         | List all the templates available for the organization                            |
| [<code>push</code>](./templates_push)         | Create or update a template from the current directory or as specified by flag   |
| [<code>versions</code>](./templates_versions) | Manage different versions of the specified template                              |
| [<code>delete</code>](./templates_delete)     | Delete templates                                                                 |
| [<code>pull</code>](./templates_pull)         | Download the active, latest, or specified version of a template to a path.       |
| [<code>archive</code>](./templates_archive)   | Archive unused or failed template versions from a given template(s)              |
