# med-app-be
Server application used to manage medical information like diseases, risks or symptoms.

### Prerequisites

In order to install project dependencies and run/build the app, please ensure that you have the following software installed:
- Node.js v16.14.2 or later
- NPM v8.5.0 or later
- Docker

You may also need Nest CLI, so use the following command to install it:
```
npm i -g @nestjs/cli
```

You will find more details regarding the Node.js and NPM installation [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Project dependencies
Run the following command to install the project dependencies:
```
npm ci 
```
#### Automated code formatting and linting

ESLint and Prettier are used for code formatting and linting for better readability and maintainability. The tools are run on every Git commit, so it's required to enable Git hooks before development.

Run the following command to enable Git Hooks:
```
npm run prepare
```

### Running the app

The app requires docker or a local MySQL installation. If using a local MySQL database, see [configuration](#configuration) section for details.

#### Docker
There is a docker-compose.yml file for starting Docker.

```
docker-compose up
```

After running the app, you can stop the Docker container with
```
docker-compose down
```

Starting the app:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

Note that no automated tests are implemented yet.

### App environment
- Default dev environment configuration can be found in `.dev.env` file.

### Configuration

The following environment variables are used for project configuration:
- `DATABASE_USER` - database user login
- `DATABASE_PASSWORD` - database user password
- `DATABASE_HOST` - database host
- `DATABASE_PORT` - database port
- `DATABASE_NAME` - database name
- `JWT_ACCESS_TOKEN_SECRET` - JWT access token secret
- `JWT_ACCESS_TOKEN_EXPIRATION_TIME` - JWT access token expiration time
- `JWT_REFRESH_TOKEN_SECRET` - JWT refresh token secret
- `JWT_REFRESH_TOKEN_EXPIRATION_TIME` - JWT refresh token expiration time

### Further development

Please check [TODO file](TODO.md) to see the tasks.
