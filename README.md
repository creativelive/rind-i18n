# rind-i18n [![](https://travis-ci.org/creativelive/rind-i18n.svg)](https://travis-ci.org/creativelive/rind-i18n)

Turn a collection of [messageformat](https://github.com/SlexAxton/messageformat.js) json files into a dictionary object.

## Usage

Given the file structure:
```
└── lang
    ├── en-US
    │   └── foo
    │       └── main.json
    └── fr-FR
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

dictionary['en-US']['foo/main'].greeting() // hello
dictionary['fr-FR']['foo/main'].greeting() // bonjour
```
