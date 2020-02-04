var core = require('@statickit/core');

function addToConvertKit(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToConvertKit', args, opts);
};
exports.addToConvertKit = addToConvertKit;

exports.createClient = core.createClient;

