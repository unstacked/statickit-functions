var core = require('@statickit/core');

function addToMailchimp(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp', args, opts);
};
exports.addToMailchimp = addToMailchimp;

function helloWorld(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('helloWorld', args, opts);
};
exports.helloWorld = helloWorld;

exports.createClient = core.createClient;

