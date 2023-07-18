# Tasks api

## Description

This is an app built with [NestJS](https://github.com/nestjs/nest) framework and Firestore from [Firebase](https://firebase.google.com/) to create, list and update tasks.

This API provides endpoints for managing and retrieving information about user's tasks and all endpoints are documented with Swagger, so you can test endpoints in a local environment by simply opening in your browser:
>  ### Check endpoints locally
>
> http://localhost:3000/
> 



Or you can test the endpoints using a deployed version with this url:
>  ### Check endpoints live production
>
> https://firebase-tasks.onrender.com/
> 




Here is a list of the endponts:
| endpoint | method | description| response OK|
| --- | --- | --- | --- |
| /tasks | GET | Retrieves a list of all tasks | ``` [ {task1} , {task2}, ... ] ```
/tasjs/:id | GET | Retrieves a task specified by its Id |  ``` { task } ``` |
/tasks | POST | Creates a new tasks |  ``` { task } ``` |
/tasks/:id | PUT | Update a task specified by its Id |  ``` { task } ``` |


## Environment Variables

It is important to configure required environment variables in order to run the project,
here is an example with all the required env variables

| **.env** |
| --- | 
```
SERVICE_ACCOUNT_KEY_FILE="path_to_your_SAK_file"

FIREBASE_PROJECT_ID="your_project_id"
FIREBASE_CLIENT_EMAIL="your_client_email"
FIREBASE_PRIVATE_KEY="your_private_key"

```


| variable | description |
| --- | --- | 
| SERVICE_ACCOUNT_KEY_FILE | Path to configuration file (.json) downloaded from your Firebase project configuration page (set this variable only if you use *keyFilename* to set up firebase, Refer to **app.module.ts** to see usage) |
| FIREBASE_PROJECT_ID | Project ID from Firebase |
| FIREBASE_CLIENT_EMAIL | Client ID from firebase |
| FIREBASE_PRIVATE_KEY | Private key from Firebase |



## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
