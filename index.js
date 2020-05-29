var core = require('@statickit/core');

function sendContactEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendContactEmail', args, opts);
};
exports.sendContactEmail = sendContactEmail;

function submitContactForm(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('submitContactForm', args, opts);
};
exports.submitContactForm = submitContactForm;

exports.createClient = core.createClient;

