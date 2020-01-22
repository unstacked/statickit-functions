var core = require('@statickit/core');

function addToMailchimp(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('addToMailchimp', args, opts);
};
exports.addToMailchimp = addToMailchimp;

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

function sendEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendEmail', args, opts);
};
exports.sendEmail = sendEmail;

exports.createClient = core.createClient;

