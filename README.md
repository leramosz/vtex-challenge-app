## VTEX Code Challenge - APP Implementation

This APP was built as part of the VTEX Code Challenge that was requested by the VTEX HR team during its recruiting process for a Technical Consultant position.

This APP was built using the following technologies:

- React.js
- React Bootstrap
- Bulma

The APP allows navigating movies and movie categories retrieving the data from an [API](https://github.com/leramosz/vtex-challenge-api) built in Node.js

### Running the APP

The first step is cloning the repository and running "npm install" in the root project folder to install all the dependencies. Then, you can run the application running "npm start" in DEV mode. 

To build the APP in PROD mode, you can run "npm run build" or using Docker running the following comands:

- docker build -t vtex-app .
- docker run -p 8000:80 vtex-app

Later, you can go to http://localhost:8000/.

### Running test

In order to run tests, run "npm test"