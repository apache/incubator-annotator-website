---
title: Develop Apache Annotator
isDevelop: true
layout: docs
---

## Install from source

This project’s source code is available directly [from the ASF](https://gitbox.apache.org/repos/asf?p=incubator-annotator.git) or [via GitHub](https://github.com/apache/incubator-annotator).

### Requirements

If you’d like to code on the project, you will need the following:

- [git](https://git-scm.com/)
- [node](https://nodejs.org) version ^12.20 || ^14.15 || ^15.4 || ^16.0
- [yarn](https://www.yarnpkg.com/) version ^1.5

### Install

To retrieve the code using git:

``` shell
$ git clone https://gitbox.apache.org/repos/asf/incubator-annotator.git apache-annotator
```

Then install dependencies using yarn:

``` shell
$ cd apache-annotator
$ yarn install
```

## Build

To compile (‘transpile’) the code:

``` shell
$ yarn build
```

For each module, the TypeScript source code is in `packages/…/src` and the Javascript is output in `packages/…/lib`.

To use your local build of the code in an application that depends on annotator, have a look at the [`yarn link`](https://yarnpkg.com/cli/link) or [`npm link`](https://docs.npmjs.com/cli/v7/commands/npm-link) command.

## Play

To run a webserver running [the demo](https://annotator.apache.org/demo/):

``` shell
$ yarn start
```

Now open `http://localhost:8080/` (or whichever address the command prints) in your web browser to play with the demo. The server continuously rebuilds and hot-reloads to the source code after any edits, so you can directly try out any changes you make to the features it demonstrates.

## Run tests

This runs the tests for all packages and reports their code coverage:

``` shell
$ yarn test
```
