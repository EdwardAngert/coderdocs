---
title: coder
description: '```console'
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# coder

## Usage

```console
coder [global-flags] <subcommand>
```

## Description

```console
Coder — A tool for provisioning self-hosted development environments with Terraform.
  - Start a Coder server:

     $ coder server

  - Get started by creating a template from an example:

     $ coder templates init
```

## Subcommands

| Name                                               | Purpose                                                                                               |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| [<code>completion</code>](./completion)         | Install or update shell completion scripts for the detected or chosen shell.                          |
| [<code>dotfiles</code>](./dotfiles)             | Personalize your workspace by applying a canonical dotfiles repository                                |
| [<code>external-auth</code>](./external-auth)   | Manage external authentication                                                                        |
| [<code>login</code>](./login)                   | Authenticate with Coder deployment                                                                    |
| [<code>logout</code>](./logout)                 | Unauthenticate your local session                                                                     |
| [<code>netcheck</code>](./netcheck)             | Print network debug information for DERP and STUN                                                     |
| [<code>notifications</code>](./notifications)   | Manage Coder notifications                                                                            |
| [<code>organizations</code>](./organizations)   | Organization related commands                                                                         |
| [<code>port-forward</code>](./port-forward)     | Forward ports from a workspace to the local machine. For reverse port forwarding, use "coder ssh -R". |
| [<code>publickey</code>](./publickey)           | Output your Coder public key used for Git operations                                                  |
| [<code>reset-password</code>](./reset-password) | Directly connect to the database to reset a user's password                                           |
| [<code>state</code>](./state)                   | Manually manage Terraform state to fix broken workspaces                                              |
| [<code>templates</code>](./templates)           | Manage templates                                                                                      |
| [<code>tokens</code>](./tokens)                 | Manage personal access tokens                                                                         |
| [<code>users</code>](./users)                   | Manage users                                                                                          |
| [<code>version</code>](./version)               | Show coder version                                                                                    |
| [<code>autoupdate</code>](./autoupdate)         | Toggle auto-update policy for a workspace                                                             |
| [<code>config-ssh</code>](./config-ssh)         | Add an SSH Host entry for your workspaces "ssh coder.workspace"                                       |
| [<code>create</code>](./create)                 | Create a workspace                                                                                    |
| [<code>delete</code>](./delete)                 | Delete a workspace                                                                                    |
| [<code>favorite</code>](./favorite)             | Add a workspace to your favorites                                                                     |
| [<code>list</code>](./list)                     | List workspaces                                                                                       |
| [<code>open</code>](./open)                     | Open a workspace                                                                                      |
| [<code>ping</code>](./ping)                     | Ping a workspace                                                                                      |
| [<code>rename</code>](./rename)                 | Rename a workspace                                                                                    |
| [<code>restart</code>](./restart)               | Restart a workspace                                                                                   |
| [<code>schedule</code>](./schedule)             | Schedule automated start and stop times for workspaces                                                |
| [<code>show</code>](./show)                     | Display details of a workspace's resources and agents                                                 |
| [<code>speedtest</code>](./speedtest)           | Run upload and download tests from your machine to a workspace                                        |
| [<code>ssh</code>](./ssh)                       | Start a shell into a workspace                                                                        |
| [<code>start</code>](./start)                   | Start a workspace                                                                                     |
| [<code>stat</code>](./stat)                     | Show resource usage for the current workspace.                                                        |
| [<code>stop</code>](./stop)                     | Stop a workspace                                                                                      |
| [<code>unfavorite</code>](./unfavorite)         | Remove a workspace from your favorites                                                                |
| [<code>update</code>](./update)                 | Will update and start a given workspace if it is out of date                                          |
| [<code>whoami</code>](./whoami)                 | Fetch authenticated user info for Coder deployment                                                    |
| [<code>support</code>](./support)               | Commands for troubleshooting issues with a Coder deployment.                                          |
| [<code>server</code>](./server)                 | Start a Coder server                                                                                  |
| [<code>features</code>](./features)             | List Enterprise features                                                                              |
| [<code>licenses</code>](./licenses)             | Add, delete, and list licenses                                                                        |
| [<code>groups</code>](./groups)                 | Manage groups                                                                                         |
| [<code>provisioner</code>](./provisioner)       | View and manage provisioner daemons and jobs                                                          |

## Options

### --url

|             |                         |
|-------------|-------------------------|
| Type        | <code>url</code>        |
| Environment | <code>$CODER_URL</code> |

URL to a deployment.

### --debug-options

|      |                   |
|------|-------------------|
| Type | <code>bool</code> |

Print all options, how they're set, then exit.

### --token

|             |                                   |
|-------------|-----------------------------------|
| Type        | <code>string</code>               |
| Environment | <code>$CODER_SESSION_TOKEN</code> |

Specify an authentication token. For security reasons setting CODER_SESSION_TOKEN is preferred.

### --no-version-warning

|             |                                        |
|-------------|----------------------------------------|
| Type        | <code>bool</code>                      |
| Environment | <code>$CODER_NO_VERSION_WARNING</code> |

Suppress warning when client and server versions do not match.

### --no-feature-warning

|             |                                        |
|-------------|----------------------------------------|
| Type        | <code>bool</code>                      |
| Environment | <code>$CODER_NO_FEATURE_WARNING</code> |

Suppress warnings about unlicensed features.

### --header

|             |                            |
|-------------|----------------------------|
| Type        | <code>string-array</code>  |
| Environment | <code>$CODER_HEADER</code> |

Additional HTTP headers added to all requests. Provide as key=value. Can be specified multiple times.

### --header-command

|             |                                    |
|-------------|------------------------------------|
| Type        | <code>string</code>                |
| Environment | <code>$CODER_HEADER_COMMAND</code> |

An external command that outputs additional HTTP headers added to all requests. The command must output each header as `key=value` on its own line.

### --force-tty

|             |                               |
|-------------|-------------------------------|
| Type        | <code>bool</code>             |
| Environment | <code>$CODER_FORCE_TTY</code> |

Force the use of a TTY.

### -v, --verbose

|             |                             |
|-------------|-----------------------------|
| Type        | <code>bool</code>           |
| Environment | <code>$CODER_VERBOSE</code> |

Enable verbose output.

### --disable-direct-connections

|             |                                                |
|-------------|------------------------------------------------|
| Type        | <code>bool</code>                              |
| Environment | <code>$CODER_DISABLE_DIRECT_CONNECTIONS</code> |

Disable direct (P2P) connections to workspaces.

### --disable-network-telemetry

|             |                                               |
|-------------|-----------------------------------------------|
| Type        | <code>bool</code>                             |
| Environment | <code>$CODER_DISABLE_NETWORK_TELEMETRY</code> |

Disable network telemetry. Network telemetry is collected when connecting to workspaces using the CLI, and is forwarded to the server. If telemetry is also enabled on the server, it may be sent to Coder. Network telemetry is used to measure network quality and detect regressions.

### --global-config

|             |                                |
|-------------|--------------------------------|
| Type        | <code>string</code>            |
| Environment | <code>$CODER_CONFIG_DIR</code> |
| Default     | <code>~/.config/coderv2</code> |

Path to the global `coder` config directory.
