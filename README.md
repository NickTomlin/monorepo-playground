# monorepo-playground
*note: wip*

Playing around with npm workspaces + github actions to build out a toy project.

## Goals

This repo exposes a multi-package project

```
- packages
  * cli (published to npm)
    - A command line runner
  * http (published to npm)
    - An http client (for standalone use and also used by cli)
  * [maybe more]...
```

This should model a relatively common pattern for an open source project.

Prior art
---

- https://devsday.ru/blog/details/43682
- https://github.com/Quramy/npm-ts-workspaces-example
