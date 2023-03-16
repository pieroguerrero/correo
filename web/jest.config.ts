export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/__mocks__/imagesMocks.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
