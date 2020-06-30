var core = require('@statickit/core');

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

function createTestCustomer(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createTestCustomer', args, opts);
};
exports.createTestCustomer = createTestCustomer;

function createTestSubscripion(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createTestSubscripion', args, opts);
};
exports.createTestSubscripion = createTestSubscripion;

function createTestSubscription(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('createTestSubscription', args, opts);
};
exports.createTestSubscription = createTestSubscription;

function submitContactForm(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('submitContactForm', args, opts);
};
exports.submitContactForm = submitContactForm;

exports.createClient = core.createClient;

