---
title: users suspend
description: >-
  Update a user's status to 'suspended'. A suspended user cannot log into the
  platform
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# users suspend

Update a user's status to 'suspended'. A suspended user cannot log into the platform

## Usage

```console
coder users suspend [flags] <username|user_id>
```

## Description

```console
 coder users suspend example_user
```

## Options

### -c, --column

|         |                                                    |
|---------|----------------------------------------------------|
| Type    | <code>[username\|email\|created at\|status]</code> |
| Default | <code>username,email,created at,status</code>      |

Specify a column to filter in the table.
