var core = require('@statickit/core');

function performMagic(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('performMagic', args, opts);
};
exports.performMagic = performMagic;

function sendContactInformation(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactInformation', args, opts);
};
exports.sendContactInformation = sendContactInformation;

exports.createClient = core.createClient;

