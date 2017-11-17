# Pyro Base Project

This is the base project for Pyro Apps.

## Installation

```
yarn install
yarn run start
```

## Authentication Procedure

1. Create an anonymous user for each person on the app
2. Allow them to start adding stuff to the app using anonymous user refs
3. Once they log in, transfer all their data to the new ref

The benifit of this is that it allows for users to start using the app without authenticating (barrier)

One click CTA into using the application