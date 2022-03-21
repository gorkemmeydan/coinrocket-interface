## CoinRocket

[![Integration Tests](https://github.com/gorkemmeydan/coinrocket-interface/actions/workflows/integration.yml/badge.svg)](https://github.com/gorkemmeydan/coinrocket-interface/blob/main/.github/workflows/integration.yml)

A fullstack web application for people to track their crypto assets with history and follow the current market by prices, trending coins and news.

## Technologies used

### User Interface

React.js, Next.js, styledcomponents and Typescript is used for the user interface. For state management Context API is used.

### Security

For security, Oauth2 acess and refresh JWT tokens are used with cookies. Authentication guards done on the server side with middleware and server side proxy server handles communication with the backend.

### Proxy Server

Next.js api routes are used for a http-proxy that routes to the backend. Hence, client never communicates with the backend directly.

### Testing

Integration tests are done with Cypress and proxy server is mocked with Mirage.js. Testing process is automated with Github Actions.

### Backend

Backend is written with Java, Spring Boot/Cloud, Hibernate, PostgreSQL, Redis and Docker. Backend can be seen [here](https://github.com/gorkemmeydan/coinrocket-api)

## Demo

![Demo Gif](./assets/coinrocket-demo.gif)

## Setup / Installation

For running the development server:

```bash
npm run dev
# or
yarn dev
```

For building and running the application:

```bash
npm run build
# or
yarn build
```

and

```bash
npm run start
# or
yarn start
```
