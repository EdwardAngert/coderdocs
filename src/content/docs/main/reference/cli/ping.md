---
title: ping
description: Ping a workspace
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# ping

Ping a workspace

## Usage

```console
coder ping [flags] <workspace>
```

## Options

### --wait

|         |                       |
|---------|-----------------------|
| Type    | <code>duration</code> |
| Default | <code>1s</code>       |

Specifies how long to wait between pings.

### -t, --timeout

|         |                       |
|---------|-----------------------|
| Type    | <code>duration</code> |
| Default | <code>5s</code>       |

Specifies how long to wait for a ping to complete.

### -n, --num

|      |                  |
|------|------------------|
| Type | <code>int</code> |

Specifies the number of pings to perform. By default, pings will continue until interrupted.

### --time

|      |                   |
|------|-------------------|
| Type | <code>bool</code> |

Show the response time of each pong in local time.

### --utc

|      |                   |
|------|-------------------|
| Type | <code>bool</code> |

Show the response time of each pong in UTC (implies --time).
