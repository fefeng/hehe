module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "installedESLint": true,
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "quotes": [
            1,
            "single"
        ],
        "semi": [
            1,
            "always"
        ]
    }
};