# 5 Day Weather Forecast

A simple weather app written using React that displays a 5 day forecast based on a specific city, searched for by the user.

This app covers a number of basic concepts in React such as Components, Styles, Props, Hooks, Conditional Rendering, Tests and more.

## Install

- Clone [this](https://github.com/ejmadkins/weather-app) project to your machine
- Run `$ npm install` to install the dependancies for this app.

## Run

- Run `$ npm start` to run the app
- Access the app via a browser via http://localhost:3000.

## Test

- Unit tests for this app can be run by executing `$ npm test`.

## Docker Support

There is also a Dockerfile included in this repo, allowing you to deploy this app on platforms that support OCI container images.

To run locally on your machine follow these steps:

1. Build the container image: `docker build -t weather-app .`
2. Run the container: `docker run -it -p 8080:3000 weather-app`

A live preview of this service can be found [here](https://weather-app-rxnkmpc7hq-nw.a.run.app/), deployed to Google [Cloud Run](https://cloud.google.com/run).
