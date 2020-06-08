var core = require('@statickit/core');

function addToMailchimp(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp', args, opts);
};
exports.addToMailchimp = addToMailchimp;

exports.createClient = core.createClient;

