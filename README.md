# HTTPServer Express

```javascript
$ npm install
$ npm run start
```

## Pasos

### express generator
```bash
$ express --view=hbs --git <nombre proyecto>
```

### Configurar eslint

__.eslintrc.json__
```json
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
}
```

instalar paquetes de eslint
```bash
$ npm i -D eslint eslint-config-airbnb-base eslint-plugin-import
```

### Install Nodemon

```bash
$ npm i -D nodemon
```

crear script en package.json
```json
{
  ...
  "scripts": {
    "start": "node ./bin/www",
    "start:dev": "nodemon ./bin/www",
    ...
  },
  ...
}
```