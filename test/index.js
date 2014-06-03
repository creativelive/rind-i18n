'use strict';

var path = require('path');
var test = require('tape');

test('should compile a file structure into a dictionary object', function(t) {
  t.plan(3);

  var dictionary = require('..')({
    cwd: path.join(process.cwd(), 'test', 'lang')
  });
  t.equal(typeof dictionary.en.main.greeting, 'function');
  t.equal(typeof dictionary['en-US'].main.greeting, 'function');
  t.equal(typeof dictionary.fr.main.greeting, 'function');
});
