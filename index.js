var core = require('@statickit/core');

function createCharge(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createCharge', args, opts);
};
exports.createCharge = createCharge;

exports.createClient = core.createClient;

