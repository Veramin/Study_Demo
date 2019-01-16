module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "jquery": true,
      "es6": true,
      "node": true,
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 8,
      "ecmaFeatures": {
        "modules": true,
        "experimentalObjectRestSpread": true
      }
    },
    "extends": "eslint:recommended",
    "rules": {
      "semi": [
        "error",
        "always"
      ],
      "no-console": 0,
    }
  };
  