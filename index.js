var core = require('@statickit/core');

function requestUpgrade(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('requestUpgrade', args, opts);
};
exports.requestUpgrade = requestUpgrade;

function sendSupportEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendSupportEmail', args, opts);
};
exports.sendSupportEmail = sendSupportEmail;

function signUpSurvey(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('signUpSurvey', args, opts);
};
exports.signUpSurvey = signUpSurvey;

exports.createClient = core.createClient;

