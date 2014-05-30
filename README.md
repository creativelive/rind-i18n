# rind-i18n [![](https://travis-ci.org/diffsky/rind-i18n.png)](https://travis-ci.org/diffsky/rind-i18n)

Turn a collection of [https://github.com/SlexAxton/messageformat.js](messageformat) json files into a dictionary object.

## Usage

Given the file structure:
```
└── lang
    ├── en-us
    │   └── foo
    │       └── main.json
    └── fr-fr
        └── foo
            └── main.json
```

Usage:
```
var opts = {
  cwd: process.cwd(), // default
  glob: '**/*.json'   // default
}
var dictionary = require('rind-i18n')(opts);

dictionary['en-us'].main.greeting() // hello
dictionary['fr-fr'].main.greeting() // bonjour
```
