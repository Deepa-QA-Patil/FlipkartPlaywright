# Flipkart E-commerce Automation Framework

## Project Overview

An end-to-end automation testing framework developed using Playwright and TypeScript to validate the core functionalities of the Flipkart e-commerce website.

## Technologies Used

- Playwright
- TypeScript
- JavaScript
- Node.js
- Page Object Model (POM)
- API Testing
- JSON Test Data
- Git and GitHub
- GitHub Actions
- CI/CD
- HTML Reporting

## Framework Architecture

The project follows the Page Object Model design pattern with reusable page classes, fixtures, test data and utility functions.

## Test Scenarios

### Homepage

- Verify homepage loading
- Verify page title
- Verify search functionality

### Search

- Search for multiple products
- Validate search results
- Verify product navigation

### Filters and Sorting

- Verify brand filters
- Verify price filters
- Verify sorting options

### Product Details

- Verify product title
- Validate product details page

### Shopping Cart

- Verify cart navigation
- Validate cart state

### API Testing

- GET request validation
- POST request validation
- Status code validation
- Response body validation

## Execution Commands

Install dependencies:

`npm install`

Run all tests:

`npx playwright test`

Run Chromium tests:

`npx playwright test --project=chromium`

Run tests in headed mode:

`npx playwright test --headed`

Run API tests:

`npx playwright test tests/api`

Generate HTML report:

`npx playwright show-report`

## Reporting and Debugging

- Playwright HTML Report
- Screenshots on failure
- Video recording on failure
- Trace Viewer
- GitHub Actions execution

## CI/CD Integration

GitHub Actions is configured to execute automated tests on code pushes and pull requests.

## Disclaimer

This project is intended for educational and portfolio purposes. It does not perform actual purchases or bypass website security mechanisms.
