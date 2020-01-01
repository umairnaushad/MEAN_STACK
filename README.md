## To execute locally?
- To start nodemon server: `cd backend` and `nodemon server`
- To start mongoDB shell: `cd backend` and `mongod`
- To start angular application: `npm install` and `ng serve -o --port 4201`
- Navigate to `http://localhost:4201/`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
Step by step article on [MEAN Stack Tutorial – Angular 7 CRUD App with Bootstrap 4](https://www.positronx.io/mean-stack-tutorial-angular-7-crud-bootstrap/)

## Remove extra packages
npm install depcheck -g
depcheck
npm install -g npm-check-unused
npm-check-unused
npm cache clean --force 