var core = require('@statickit/core');

function addToMailchimp(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp', args, opts);
};
exports.addToMailchimp = addToMailchimp;

function sendContactEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactEmail', args, opts);
};
exports.sendContactEmail = sendContactEmail;

exports.createClient = core.createClient;

