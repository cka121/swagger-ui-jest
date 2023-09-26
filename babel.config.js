module.exports = {
    //presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
    "presets": [
        [
            "@babel/preset-react",
            {
                "runtime": "automatic"
            }
        ],
        [
            "@babel/preset-env",
            {
                "modules": "commonjs"
            }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "add-module-exports",
        "@babel/plugin-transform-modules-commonjs",
        [
            "module-resolver",
            {
                "alias": {
                    "src": "./src",
                    "common": "./src/common",
                    "components": "./src/components",
                    "hooks": "./src/hooks",
                    "network": "./src/network",
                    "pages": "./src/pages",
                    "utils": "./src/utils",
                    "node_modules": "./node_modules",
                    "test": "./test/unit"
                }
            }
        ]
    ]
};