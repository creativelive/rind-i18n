'use strict';

var path = require('path');
var glob = require('glob');
var MessageFormat = require('messageformat');
var langs = {};
var messageFormatters = {};
var locale, lang, split, terms, key;

function dictionary(opts) {
  opts.cwd = opts.cwd || process.cwd();
  opts.glob = opts.glob || '**/*.json';
  opts.strict = opts.strict || false;

  var files = glob.sync(opts.glob, {
    cwd: opts.cwd
  });

  files.forEach(function(file) {
    split = file.split('/');
    locale = split[0];
    lang = split[0].substring(0, 2);

    langs[locale] = langs[locale] || {};

    messageFormatters[locale] = messageFormatters[locale] || new MessageFormat(lang);

    terms = require(path.join(opts.cwd, file));
    split = split.splice(1);
    key = split.concat([split.pop().slice(0, -5)]).join('/');

    Object.keys(terms).forEach(function(message) {
      if (opts.strict) {
        if (message !== message.toUpperCase()) {
          throw new Error('strict mode, key not uppercased: ' + locale + '[\'/' + key + '\'].' + message);
        }
      }
      langs[locale] = langs[locale] || {};
      langs[locale][key] = langs[locale][key] || {};
      langs[locale][key][message] = messageFormatters[locale].compile(terms[message]);
    });
  });

  return langs;
}

module.exports = dictionary;
