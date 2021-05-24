# Lab 27 - Props and States

Codefellows 401 JavaScript

## Overview

- React App: Component Based UI
  - RESTy Phase 2: Connect RESTy with APIs, running live requests

- **Business Requirements**

- Our application will be an API testing tool that can be run in any browser, allowing a user to easily interact with APIs in a familiar interface.

- The core requirements and functionality are as follows:

- Simple, intuitive user interface
  - A form where a user:
    - Enters a REST API Endpoint (URI)
    - Selects the REST Method to use (get, post, put, delete)
    - For put and post, allow the user to enter JSON to be used as the body for the request
    - A button to initiate the request
  
  - An output section which:
    - Displays a spinner to indicate a request is in process

  - Once a request is complete:
    - Hide the spinner
    - Display a well formatted view of the API response in 2 sections
      - Headers
      - Body

  - A history section which:
    - Shows a list of all unique, successful requests
    - Allows a user to click or select one to re-populate the form so they can repeat the request

- **Technical Requirements**
  - The application will be created with the following overall architecture and methodologies:
    - React
    - ES6 Classes
    - Shared Component State
    - Local Storage for storing request history
    - Superagent or Axios for performing API Requests
    - SASS for styling
    - Global Theme
    - Component specific CSS where possible
    - Test Driven Development, using Jest
    - Tests will be runnable locally
    - Deployment to GitHub Pages using an Action

- **Development Process, Milestones**
- **Phase 2 Requirements**
  - In phase 2, we will be connecting RESTy to live APIs, fetching and displaying remote data. Our primary focus will be to service GET requests

- **The following user stories detail the major functionality for this phase of the project:**
  - As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data
  - As a user, I want to see the results returned from an API request in my browser in a readable format

- **Application Flow:**
  - User enters an API URL
  - Chooses a REST Method
  - Clicks the “Go” button
  - Application fetches data from the URL given, with the method specified
  - Displays the response headers and results separately
  - Both headers and results should be “pretty printed” JSON

### Authors

- Mike Greene

### Links and Resources

- local server: 'http://localhost:3000/'
- GitHub Pages: 'https://micgreene.github.io/resty/'

#### `.env` requirements (where applicable)
