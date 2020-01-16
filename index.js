var core = require('@statickit/core');

function sendSupportEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendSupportEmail', args, opts);
};
exports.sendSupportEmail = sendSupportEmail;

exports.createClient = core.createClient;

