// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoAlias = require("craco-alias");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoEnvPlugin = require("craco-plugin-env");

module.exports = {
  style: {
    // postcssOptions: {
    //   plugins: [require("tailwindcss"), require("autoprefixer")],
    // },
  },
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
    configure: {
      globals: {
        "ts-jest": {
          isolatedModules: true,
        },
      },
      collectCoverageFrom: [
        "!<rootDir>/src/reportWebVitals.ts",
        "!<rootDir>/src/setupTests.ts",
        "!<rootDir>/src/jest-shim.js",
        "!<rootDir>/src/__test__/utils/*"
      ],
      moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
      moduleDirectories: ["node_modules", "src"],
      setupFiles: ["<rootDir>/src/jest-shim.js"],
      setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
      preset: "ts-jest",
      //preset: "ts-jest/presets/js-with-ts",
      testMatch: [
        '**/test/unit/**/*.tsx',
      ],
      transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      transformIgnorePatterns: [
        "/node_modules/(?!flexlayout-react)",
        "/node_modules/(?!(swagger-ui|swagger-client|react-syntax-highlighter)/)",
      ],
      testEnvironment: 'node',
      "moduleNameMapper": {
        "^#swagger-ui$": "<rootDir>/node_modules/swagger-ui/dist/swagger-ui.js",
        "^#react-syntax-highlighter$": "<rootDir>/node_modules/react-syntax-highlighter/dist/esm/light.js",
        "^#buffer": "<rootDir>/node_modules/@swagger-api/apidom-reference/cjs/util/polyfills/buffer/standard-import.cjs",
        "@swagger-api/apidom-reference/configuration/empty": "<rootDir>/node_modules/@swagger-api/apidom-reference/cjs/configuration/empty.cjs",
        "@swagger-api/apidom-reference/parse/parsers/binary": "<rootDir>/node_modules/@swagger-api/apidom-reference/cjs/parse/parsers/binary/index-node.cjs",
        "@swagger-api/apidom-reference/resolve/strategies/openapi-3-1": "<rootDir>/node_modules/@swagger-api/apidom-reference/cjs/resolve/strategies/openapi-3-1/index.cjs",
        "@swagger-api/apidom-reference/dereference/strategies/openapi-3-1": "<rootDir>/node_modules/@swagger-api/apidom-reference/cjs/dereference/strategies/openapi-3-1/index.cjs"
      }
    }
  }
};