# Eppendorf Challenge

This project uses the API provided in the Eppendorf API repository, it has to be setup and running for the web app to run locally.    
The web app only uses GraphQL and does not utilize the REST API. The following technologies and frameworks were implemented:
- Apollo Graphql (has its own store for performant graphQL usage)
- GraphQL Codegen (generates hooks and types from schema)
- MaterialUi for some basic Layout & sortable data grid
- Prettier (only minimal setup though, ran out of time)
- EsLint (only minimal setup though, ran out of time)
- React Final Forms, raw subscriber based API for forms without any layout
- React Router for basic routing

With more time I would have added mutations and a user entity too, the API does support it!

## Install web app

### `npm install`

## Run web app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Develop web app

### `npm run codegen`

To generate hooks and types from your graphql queries