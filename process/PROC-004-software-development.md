# PROC-004 - Software Development Process


Revision | Revision Date | Author | Description of changes
-------- | ------------- | ------ | ----------------------
v0.0.1 | 2017-05-24 | Igor Vignan | Initial Document
v0.0.2 | 2017-05-24 | Eugene Istrati | Approved
v0.0.3 | 2017-06-23 | Eugene Istrati | Process Refactoring


## GENERAL

This document describes the general development workflow for MitocGroup
and AdTechMedia projects. A custom Scrum approach is used as a base for
software development. Below you can find the
rules/regulations/definitions and associated processes.

## TEAM

The Team consists of a Product Owner, the Development/QA Team, and a
Scrum Master. Team is self-organizing and cross-functional.
Self-organizing teams choose how best to accomplish their work, rather
than being directed by others outside the team. Cross-functional teams
have all competencies needed to accomplish the work without depending on
others not part of the team.

## CODE & MANAGEMENT TOOLS

1) GitHub is used for Code Management, Storage and as a main Management Tool.
2) GitHub Organizations:
    - [AdTechMedia](https://github.com/AdTechMedia)
    - [MitocGroup](https://github.com/MitocGroup)
3) GitHub Projects AND/OR [ZenHub Plugin](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd) is required for GitHub to activate Issue Tracking tool for related projects.
4) GitHub Integrations:
    - Travis
    - CodeClimate (Code Analysis & Code Coverage)
    - Sentry.io
    - Snyk.io
    - Performance Monitoring

## PRODUCT BACKLOG

The Product Backlog is an ordered list of team goals that are needed in
the product and is the single source of requirements for any changes to
be made to the product. The Product Owner is responsible for the Product
Backlog, including its content, availability, and ordering.

## REQUIREMENTS

-   Requirements are delivered in form of Team goals by Product Owner every 2 months
-   Development & QA Team reviews proposed goals and address questions/concerns before scope confirmation
-   Team goals are added to GitHub as epic issues by Product Owner / Scrum Master / Development Team
-   Development Team breaks down the Epic issues into smaller task *(enhancements)*
-   Tasks are associated with a Milestone for a product increment

## THE SPRINT

A time-box of two weeks during which a “Done”, useable, and potentially
releasable product Increment is created. A new Sprint starts immediately
after the conclusion of the previous Sprint.

Sprints consist of:

-   The Sprint Planning *(held every Monday)*
-   Daily Scrums *(replaced by Daily Standup emails)*
-   The Development work
-   The Sprint Review *(held every Monday)*
-   The Sprint Retrospective *(held every 2nd Monday right after Sprint Review/Planning)*

## SPRINT BACKLOG

The Sprint Backlog is the set of Product Backlog items selected for the
Sprint/Milestone, plus a plan for delivering the product Increment and
realizing the Sprint Goal. The Sprint Backlog is a forecast by the
Development Team about what functionality will be in the next Increment
and the work needed to deliver that functionality into a “Done”
Increment.

## WORKING ENVIRONMENTS

1)  Local
2)  Development
3)  Stage/Demo
4)  Production

### Local Environment

-   Development team works on assignments using local code, server or side deploys
-   Development team should keep the local environment up-to-date with production like configurations
-   Code from Local Environment should be pushed to Development environment at least once a day

### Development Environment

-   Development environment represents code integration from all Local Environments
-   Functional and Integration Testing is performed by QA in Dev Environment for all item delivered by Development team
-   Pushing the code to Dev Environment is a direct responsibility for a developer; it is up to Development Team to decide who will push the code

### Stage/Demo Environment

-   Stage/Demo Environment is a production like environment
-   Regression Testing is performed by QA in Stage environment before Production Release
-   Development team will push the code to Stage Environment at least 24 hours before Production release or upon QA Request
-   Blocking/Critical issues or showstoppers found in Stage environment are Reported by QA as early as possible

### Production Environment

-   Production Environment is a end user environment accessible to public
-   Code is pushed to Production Environment from Stage environment/branch only
-   Health Check/ Smoke Testing is performed by QA in Production environment after Release

### Suggested Naming Convention

-   git: `master`, purpose: `production` or `live` environment
-   git: `stage`, purpose: `staging` or `pre-production` environment
-   git: `test`, purpose: `testing` or `quality-assuarence` environment
-   git: `dev`, purpose: `development` or `sandbox` environment
-   git: `feature/x`, purpose: `feature` development
-   git: `bugfix/x`, purpose: `bug fixing` development
-   git: `hotfix/x`, purpose: `hot fixing` development, for MAJOR and CRITICAL bugs

## RELEASES

1)  Production release
2)  HotFix

![PROD DEPLOY](https://github.com/MitocGroup/www/blob/master/images/workflow.png)

### Production Release

-   Product increment should be released in Production every second Monday by 9 AM (EST)
-   Sign Off by Product/Project Manager is required for Production Release
-   Critical and Blocking issues should be reported as earliest as possible or during Development Phase (when code is in Dev/Test Environment)
-   Build Branch is used to isolate changes for testing, unit tests are being completed at this phase.
-   On opening a Pull Request from build to test, a deploy process is automatically triggered to Test Environment.
-   If E2E tests are executed successfully, PR from build to test can be merged.
-   Test Environment is a Sandbox for QA Team to validated functional changes
-   On opening a Pull Request from test to stage, a deploy process is automatically triggered to Stage Environment.
-   If Functional Testing + E2E tests are executed successfully, PR from test to stage can be merged.
-   Stage Environment is a Stable Regression Environment for QA Team
-   If Regression Testing + E2E tests are executed successfully, PR from stage to prod can be merged.
-   On opening a Pull Request from stage to prod, a deploy process is automatically triggered to PROD Environment.
-   Healthcheck is required after PROD deployment.



### HotFix

A hotfix is a single, cumulative package that is used to address a
problem in a software product (i.e. software critical issue). Typically,
hotfixes are made to address a specific customer situation.

-   HotFix branch is created from Master branch (PROD)
    Note: HotFix branch can be created from any other branch ex. STAGE
-   Required fix is applied in HotFix branch
-   On opening a Pull Request from hotfix to stage, a deploy process is automatically triggered to Stage Environment.
-   Pull requests is closed after testing. Important: Pull requests from hotfix to stage should not be merged
-   If Regression Testing + E2E tests are executed successfully, PR from hotfix to prod can be opened.
-   On opening a Pull Request from hotfix to prod, a deploy process is automatically triggered to PROD Environment.
-   Pull requests is closed after testing. Important: Pull Requests from hotfix to prod should not be merged.
-   git cherry-pick or git format-patch commands are used to include hotfix changes into dev branch.


