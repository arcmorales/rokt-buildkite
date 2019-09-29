# Buildkite WebdriverIO UI Tests

[![Build status](https://badge.buildkite.com/7e5b478e9053193d4cffac7f39e9ee1e3339e40e6d35b986cb.svg)](https://buildkite.com/rokt-2/wdio-ui-test)

This repository is a UI Test written in [Node.js](https://nodejs.org/) using [WebdriverIO](https://webdriver.io/) and built on [Buildkite](https://buildkite.com/).

## Installation

1. Clone the repo at https://github.com/arcmorales/rokt
2. To ensure that packages can be installed, run `nvm use` to switch to the LTS version of Node
3. Run `npm install` to install all packages

## Running The Test

### Local

To run the test locally, use the command `npm test` to run the `register and login` tests.

To run the log in test and register tests separately, run `npm test login` and `npm test register` respectively.

### Buildkite

This repo uses my personal machine as its build runner (buildkite agent).

To trigger the buildkite agent on my local machine, `buildkite-agent start` command is ran.

Buildkite builds can be triggered manually in the organisation's build interface or via github webhook (deployment, pull request and pushes)

----------

## Test Case Assumptions

Before writing automated test, I have executed manual exploratory test to familiarise myself with the functionality of the registration and log in screens. The following are the assumptions based on the behaviour of the site per exploratory test.

1. The test cases in this repository assumes that the registration page has no field validation and is assumed then as a feature requirement, as manifested by the lack of validations for incorrect input.
2. Registration form does not throw validation for missing inputs and can even submit with empty details. It is strongly recommended that field validations be enforced based on expected set of inputs.
3. API call to submit a form can potentially reach about 1.5 to 2 minutes to complete. This timing has been considered in identifying the timeout duration.
4. Log-in form also has no validation for invalid inputs, except that it does not redirect the user away from the sign in screen if incorrect credentials were provided.
5. Test data used here is assumed to not contain sensitive information. However it is recommended that the fixtures be stored in secure secret managers/storage.

