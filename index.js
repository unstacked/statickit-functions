var core = require('@statickit/core');

function createCharge(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createCharge', args, opts);
};
exports.createCharge = createCharge;

function createCustomer(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createCustomer', args, opts);
};
exports.createCustomer = createCustomer;

function createSubscription(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createSubscription', args, opts);
};
exports.createSubscription = createSubscription;

exports.createClient = core.createClient;

