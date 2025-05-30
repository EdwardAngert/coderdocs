---
title: schedule start
description: Edit workspace start schedule
version: main
audience: developer
---
<!-- DO NOT EDIT | GENERATED CONTENT -->
# schedule start

Edit workspace start schedule

## Usage

```console
coder schedule start <workspace-name> { <start-time> [day-of-week] [location] | manual }
```

## Description

```console
Schedules a workspace to regularly start at a specific time.
Schedule format: <start-time> [day-of-week] [location].
  * Start-time (required) is accepted either in 12-hour (hh:mm{am|pm}) format, or 24-hour format hh:mm.
  * Day-of-week (optional) allows specifying in the cron format, e.g. 1,3,5 or Mon-Fri.
    Aliases such as @daily are not supported.
    Default: * (every day)
  * Location (optional) must be a valid location in the IANA timezone database.
    If omitted, we will fall back to either the TZ environment variable or /etc/localtime.
    You can check your corresponding location by visiting https://ipinfo.io - it shows in the demo widget on the right.

  - Set the workspace to start at 9:30am (in Dublin) from Monday to Friday:

     $ coder schedule start my-workspace 9:30AM Mon-Fri Europe/Dublin
```
