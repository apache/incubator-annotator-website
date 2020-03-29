# Apache Annotator (incubating) Website

The site is currently in static HTML hosted out of the `content/` directory.

Any pre-generated/rendered content or documentation should be added to additional
folders in the root of this repo.

## Publishing

Currently, `master` and `asf-site` should be kept in sync. The `asf-site`
branch gets published to an Apache HTTPD static hosting environment run by
the Apache infrastructure team.

## Developing

##### Requirements

- [node](https://nodejs.org) >= 10.x
- [yarn](https://www.yarnpkg.com/) >= 1.5.1

This website repository contains the main project repository as a git submodule, in order to build its demo without duplicating the code.

Run `git submodule init && git submodule update` to pull in the submodule.

Run `yarn install` to install development dependencies.

Run `yarn build` to build the demo code (it will overwrite `content/demo`).

## Organizing

We also use the [Milestones](https://github.com/apache/incubator-annotator-website/milestones?direction=asc&sort=due_date&state=open) for [this repo on GitHub](https://github.com/apache/incubator-annotator-website/) to track our quarterly board reports.

Web site [issues](https://github.com/apache/incubator-annotator-website/issues/) and [PRs](https://github.com/apache/incubator-annotator-website/pulls) are still more than welcome, though!

# License

Apache License 2.0 (obviously...:wink:)
