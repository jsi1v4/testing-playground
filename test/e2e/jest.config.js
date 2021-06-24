const rootConfig = require("../../jest.config");

module.exports = {
  ...rootConfig,
  preset: "jest-puppeteer",
  testEnvironment: "jest-environment-puppeteer",
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](node_modules|.next|test/integration|test/unit)[/\\\\]",
  ],
};
