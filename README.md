# News API Search

This web application searches for news stories using the News API v2.
It implements the following technologies:

* React 16.14.x
* Redux 7.2.x
* Redux-Saga 1.1.x
* Node-SASS 4.14.x
* TypeScript 4.0.x
* Axios 0.21.x

## Requirements

* [Node 10.x or greater](https://nodejs.org/en/download/)
* NPM 6.x or greater
* News API token - Add to .env.production

## Installation

1) `npm install`

## Run

1) `npm run dev` to start the application in development mode. The application makes requests from a local mock server.
1) `npm run build` and then `npm start` to start the application in production mode. The application makes requests from the News API.

## Test

1) `npm run test`

## TODO

* Robust error handling and testing.
* Lazy load news stories.
* Improve CSS to better handle no images and varying blurb length.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
