export function sendEmail(client, args, opts) {
  return client.invokeFunction('sendEmail', args, opts || {});
};

