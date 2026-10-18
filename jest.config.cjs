module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/*.test.js"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/src/_test/styleMock.cjs",
    "\\.(png|jpe?g|gif|svg)$": "<rootDir>/src/_test/fileMock.cjs",
  },
};
