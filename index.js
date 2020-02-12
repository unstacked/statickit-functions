var core = require('@statickit/core');

function notifySales(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('notifySales', args, opts);
};
exports.notifySales = notifySales;

exports.createClient = core.createClient;

