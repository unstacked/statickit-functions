import { SendNotification, FunctionOptions } from './types';
import { StaticKit, createClient } from '@statickit/core';

export { StaticKit, createClient } from '@statickit/core';

export function sendEmail(
  client: StaticKit,
  args: SendNotification.Args,
  opts: FunctionOptions = {}
): Promise<SendNotification.Response> {
  return client.invoke('sendEmail', args, opts);
};
