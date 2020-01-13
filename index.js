export function sendSupportEmail(client, args, opts) {
  return client.invokeFunction('sendSupportEmail', args, opts || {});
};

