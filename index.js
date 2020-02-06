var core = require('@statickit/core');

function addToConvertKit(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToConvertKit', args, opts);
};
exports.addToConvertKit = addToConvertKit;

function addToMailchimp(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp', args, opts);
};
exports.addToMailchimp = addToMailchimp;

exports.createClient = core.createClient;

