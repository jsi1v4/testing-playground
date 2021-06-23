# Testing Playground

Studies and testings.

## How to use

- `yarn test`: run unit + integration tests
- `yarn test:unit`: run unit tests
- `yarn test:intr`: run integration tests
- `yarn e2e`: run end to end tests

## Unit testing

Unit testing is a level of software testing where individual units/components of a software are tested. In the React world this means:

- testing an individual React Component;
- or pure functions;

## Integration testing

Integration tests test the interactions between the various components of an application. For a React application, this means testing:

- interactions between React components, typically performed via calling prop functions;
- manipulation of component state;
- direct manipulation of the DOM in React lifecycle methods;

## End-to-end testing

End-to-end testing  to confirm that the entire range of features works from the user’s perspective.

## Test Driven Development

TDD is essential for reaching code coverage close to 100%. TDD essentially tells us to write a test for every piece of code we want to write. A lot of the articles suggest this process:

- Add a test
- Run all tests and see if the new test fails
- Write the code (Doesn’t have to be perfect, just enough to make test pass)
- Run test (Make sure it’s green)
- Refactor code (To make code more perfect)

> Writing the component first, as it allows for more creativity, then write my tests and then refactor. No matter which approach you take the important thing is to try and test all scenarios for a certain component.
