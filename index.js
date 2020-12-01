var core = require('@statickit/core');

function helloWorld(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('helloWorld', args, opts);
};
exports.helloWorld = helloWorld;

function submitCommentNotification(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('submitCommentNotification', args, opts);
};
exports.submitCommentNotification = submitCommentNotification;

function submitContactForm(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('submitContactForm', args, opts);
};
exports.submitContactForm = submitContactForm;

exports.createClient = core.createClient;

