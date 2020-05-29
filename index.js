var core = require('@statickit/core');

function submitContactForm(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('submitContactForm', args, opts);
};
exports.submitContactForm = submitContactForm;

exports.createClient = core.createClient;

