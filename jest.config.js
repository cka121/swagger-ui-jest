// module.exports = {
//   rootDir: __dirname,
//   testEnvironment: 'jest-environment-jsdom',
//   testMatch: [
//     '**/test/unit/**/*.js',
//   ],
//   transform: {
//     "\\.js$": "babel-jest"
//   },
//   transformIgnorePatterns: [
//     "/node_modules/(?!(swagger-ui-4|swagger-ui-react-4|swagger-ui-5|swagger-ui-react-5|swagger-client|react-syntax-highlighter)/)"
//   ],
//   setupFiles: ['<rootDir>/test/jest-shim.js'],
//   setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
//   silent: false,
// };

/* jest.config.js */

const { createJestConfig } = require("@craco/craco");

const cracoConfig = require("./craco.config.js");
const jestConfig = createJestConfig(cracoConfig);

module.exports = jestConfig;
