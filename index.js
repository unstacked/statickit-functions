var core = require('@statickit/core');

function createSubscription(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createSubscription', args, opts);
};
exports.createSubscription = createSubscription;

exports.createClient = core.createClient;

