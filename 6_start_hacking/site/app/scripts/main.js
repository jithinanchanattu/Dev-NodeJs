/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var domready = require('domready');

domready(function () {
  var App = require('./app.js');
  var app = new App();
  app.helloBrowserify();
});
