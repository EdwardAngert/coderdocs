---
title: tokens
description: Manage personal access tokens
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# tokens

Manage personal access tokens

Aliases:

* token

## Usage

```console
coder tokens
```

## Description

```console
Tokens are used to authenticate automated clients to Coder.
  - Create a token for automation:

     $ coder tokens create

  - List your tokens:

     $ coder tokens ls

  - Remove a token by ID:

     $ coder tokens rm WuoWs4ZsMX
```

## Subcommands

| Name                                      | Purpose        |
|-------------------------------------------|----------------|
| [<code>create</code>](./tokens_create) | Create a token |
| [<code>list</code>](./tokens_list)     | List tokens    |
| [<code>remove</code>](./tokens_remove) | Delete a token |
