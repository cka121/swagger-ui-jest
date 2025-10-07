# SwaggerUI + Jest basic setup POC

This repository serves as a Proof of Concept (POC) demonstrating how to successfully integrate [swagger-ui](https://github.com/swagger-api/swagger-ui) and [swagger-ui-react](https://github.com/swagger-api/swagger-ui-react) with Jest for testing purposes.

## Problem Statement

Integrating Swagger UI libraries (both v4 and v5) with Jest presents several challenges:

1. **ESM vs CommonJS**: Swagger UI packages use ES modules, while Jest traditionally works with CommonJS
2. **Transitive Dependencies**: Swagger UI has dependencies like `swagger-client` and `react-syntax-highlighter` that also need special handling
3. **DOM Requirements**: Swagger UI requires a DOM environment to function properly in tests
4. **Multiple Versions**: Projects may need to test against multiple versions of Swagger UI simultaneously

## Solution

This POC demonstrates a working configuration that addresses all these challenges:

### Key Configuration Elements

#### 1. **Jest Configuration** (`jest.config.js`)

```javascript
transformIgnorePatterns: [
  "/node_modules/(?!(swagger-ui-4|swagger-ui-react-4|swagger-ui-5|swagger-ui-react-5|swagger-client|react-syntax-highlighter)/)"
]
```

This pattern tells Jest to **transform** (transpile) the specified packages instead of ignoring them, allowing ES modules to work with Jest.

#### 2. **Babel Configuration** (`babel.config.js`)

```javascript
presets: [['@babel/preset-env', {targets: {node: 'current'}}]]
```

Babel is configured to transpile ES modules to the current Node version's supported format.

#### 3. **DOM Environment Setup**

- `testEnvironment: 'jest-environment-jsdom'` provides a browser-like environment
- `test/jest-shim.js` adds necessary browser globals (TextEncoder, TextDecoder)
- `test/setup.js` sets up the JSDOM environment with proper window and document objects

#### 4. **Multi-Version Support**

The `package.json` uses npm aliases to install multiple versions side-by-side:

```json
"dependencies": {
  "swagger-ui-4": "npm:swagger-ui@^4.19.1",
  "swagger-ui-5": "npm:swagger-ui@5.7.2",
  "swagger-ui-react-4": "npm:swagger-ui-react@^4.19.1",
  "swagger-ui-react-5": "npm:swagger-ui-react@5.7.2"
}
```

This allows testing compatibility with different versions without conflicts.

## Project Structure

```
swagger-ui-jest/
├── src/
│   ├── index-swagger-ui-4.js       # Wrapper for swagger-ui v4
│   ├── index-swagger-ui-5.js       # Wrapper for swagger-ui v5
│   ├── index-swagger-ui-react-4.js # Wrapper for swagger-ui-react v4
│   └── index-swagger-ui-react-5.js # Wrapper for swagger-ui-react v5
├── test/
│   ├── jest-shim.js                # Browser globals setup
│   ├── setup.js                    # JSDOM environment setup
│   └── unit/
│       ├── test-swagger-ui-4.js
│       ├── test-swagger-ui-5.js
│       ├── test-swagger-ui-react-4.js
│       └── test-swagger-ui-react-5.js
├── babel.config.js                 # Babel transpilation config
├── jest.config.js                  # Jest testing config
└── package.json
```

## Installation

```sh
npm install
```

## Running tests

```sh
npm test
```

This will run all test suites and verify that both versions of swagger-ui and swagger-ui-react can be imported and used correctly.

## How It Works

1. **Module Aliasing**: Each source file (`src/index-swagger-ui-*.js`) imports a specific version using the npm alias
2. **Babel Transformation**: When Jest runs, Babel transforms the ES modules from Swagger UI packages to CommonJS
3. **DOM Polyfills**: The test setup provides necessary browser APIs that Swagger UI expects
4. **Isolated Testing**: Each test file validates that its corresponding wrapper correctly imports the library

## Use Cases

This setup is useful for:

- **Migration Testing**: Verify your code works with both old and new Swagger UI versions
- **Compatibility Validation**: Ensure Swagger UI integrations work in Jest test environments
- **Documentation**: Reference configuration for similar ESM + Jest integration challenges
- **CI/CD**: Automated testing of Swagger UI implementations

## Key Takeaways

1. Use `transformIgnorePatterns` to include ESM packages that need transpilation
2. Set up proper DOM environment with jsdom and necessary polyfills
3. Use npm aliases to test multiple versions simultaneously
4. Configure Babel to handle ES module transformation