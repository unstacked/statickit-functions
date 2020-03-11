var core = require('@statickit/core');

function sendContactEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactEmail', args, opts);
};
exports.sendContactEmail = sendContactEmail;

function sendEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendEmail', args, opts);
};
exports.sendEmail = sendEmail;

exports.createClient = core.createClient;

