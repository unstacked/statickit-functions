var core = require('@statickit/core');

function sendContactMessage(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactMessage', args, opts);
};
exports.sendContactMessage = sendContactMessage;

exports.createClient = core.createClient;

