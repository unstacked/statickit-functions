var core = require('@statickit/core');

function addToMailchimp(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp', args, opts);
};
exports.addToMailchimp = addToMailchimp;

function addToMailchimp2(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp2', args, opts);
};
exports.addToMailchimp2 = addToMailchimp2;

exports.createClient = core.createClient;

