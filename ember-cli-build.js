/* global require, module */

var Angular2App = require('./tools/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults);
  return app.toTree();
}