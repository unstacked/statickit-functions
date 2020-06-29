var core = require('@statickit/core');

function sendSMS(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendSMS', args, opts);
};
exports.sendSMS = sendSMS;

exports.createClient = core.createClient;

