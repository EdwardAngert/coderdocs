---
title: stat
description: Show resource usage for the current workspace.
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# stat

Show resource usage for the current workspace.

## Usage

```console
coder stat [flags]
```

## Subcommands

| Name                                | Purpose                          |
|-------------------------------------|----------------------------------|
| [<code>cpu</code>](./stat_cpu)   | Show CPU usage, in cores.        |
| [<code>mem</code>](./stat_mem)   | Show memory usage, in gigabytes. |
| [<code>disk</code>](./stat_disk) | Show disk usage, in gigabytes.   |

## Options

### -c, --column

|         |                                                                                  |
|---------|----------------------------------------------------------------------------------|
| Type    | <code>[host cpu\|host memory\|home disk\|container cpu\|container memory]</code> |
| Default | <code>host cpu,host memory,home disk,container cpu,container memory</code>       |

Columns to display in table output.

### -o, --output

|         |                          |
|---------|--------------------------|
| Type    | <code>table\|json</code> |
| Default | <code>table</code>       |

Output format.
