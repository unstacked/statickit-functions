import { SendNotification } from './types';
import { StaticKit } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export { StaticKit, createClient } from '@statickit/core';

export function sendEmail(
  client: StaticKit,
  args: SendNotification.Args,
  opts: FunctionOptions = {}
): Promise<SendNotification.Response> {
  return client.invokeFunction('sendEmail', args, opts);
};
