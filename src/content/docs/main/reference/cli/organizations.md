---
title: organizations
description: Organization related commands
version: main
audience: developer
tier: premium
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# organizations

Organization related commands

Aliases:

* organization
* org
* orgs

## Usage

```console
coder organizations [flags] [subcommand]
```

## Subcommands

| Name                                                 | Purpose                                                                                                                                                        |
|------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [<code>show</code>](./organizations_show)         | Show the organization. Using "selected" will show the selected organization from the "--org" flag. Using "me" will show all organizations you are a member of. |
| [<code>create</code>](./organizations_create)     | Create a new organization.                                                                                                                                     |
| [<code>members</code>](./organizations_members)   | Manage organization members                                                                                                                                    |
| [<code>roles</code>](./organizations_roles)       | Manage organization roles.                                                                                                                                     |
| [<code>settings</code>](./organizations_settings) | Manage organization settings.                                                                                                                                  |

## Options

### -O, --org

|             |                                  |
|-------------|----------------------------------|
| Type        | <code>string</code>              |
| Environment | <code>$CODER_ORGANIZATION</code> |

Select which organization (uuid or name) to use.
