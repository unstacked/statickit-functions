var core = require('@statickit/core');

function sendContactEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactEmail', args, opts);
};
exports.sendContactEmail = sendContactEmail;

function sendSubscribeEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendSubscribeEmail', args, opts);
};
exports.sendSubscribeEmail = sendSubscribeEmail;

exports.createClient = core.createClient;

