var core = require('@statickit/core');

function sendContactEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactEmail', args, opts);
};
exports.sendContactEmail = sendContactEmail;

function sendContactEmailFunc(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactEmailFunc', args, opts);
};
exports.sendContactEmailFunc = sendContactEmailFunc;

exports.createClient = core.createClient;

