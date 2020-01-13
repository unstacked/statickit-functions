function sendEmail(client, args, opts) {
  if (opts === void 0) { opts = {}; }
  return client.invokeFunction('sendEmail', args, opts);
};
exports.sendEmail = sendEmail;

