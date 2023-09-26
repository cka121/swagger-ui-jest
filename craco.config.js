// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require("craco-alias");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoEnvPlugin = require("craco-plugin-env");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.extend.json",
      },
    },
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {
          VERSION: process.env.npm_package_version,
        },
      },
    },
  ],
  eslint: {
    rules: {
      configure: {
        "@typescript-eslint/no-unsafe-return": "off",
      },
    },
  },
  webpack: {
    alias: {
      src: "./src",
      public: "./public",
      common: "./src/common",
      components: "./src/components",
      hooks: "./src/hooks",
      network: "./src/network",
      pages: "./src/pages",
      utils: "./src/utils",
      test: "./test/unit"
    },
  },
  jest: {
    configure(jestConfig) {
      jestConfig.preset = 'ts-jest';
      jestConfig.globals = {
        'ts-jest': {
          isolatedModules: true,
        },
      };
      jestConfig.collectCoverageFrom.push(
        '!<rootDir>/src/reportWebVitals.ts',
        '!<rootDir>/src/setupTests.ts',
        '!<rootDir>/src/jest-shim.ts',
        '!<rootDir>/src/__test__/utils/*',
      );
      jestConfig.setupFiles.push('<rootDir>/src/jest-shim.ts');
      jestConfig.transformIgnorePatterns[0] = '/node_modules/(?!(swagger-ui|swagger-client|react-syntax-highlighter)/)';
      jestConfig.testEnvironment = 'node';

      return jestConfig;
    }
  }
};