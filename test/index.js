'use strict';

var path = require('path');
var test = require('tape');

test('should compile a file structure into a dictionary object', function(t) {
  t.plan(2);

  var dictionary = require('..')({
    cwd: path.join(process.cwd(), 'test', 'lang')
  });
  t.equal(typeof dictionary['en-us'].main.greeting, 'function');
  t.equal(typeof dictionary['fr-fr'].main.greeting, 'function');
});
