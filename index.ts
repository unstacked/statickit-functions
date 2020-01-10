import { SendNotification } from './types';
import { StaticKit } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export { StaticKit, createClient } from '@statickit/core';

export function sendSupportEmail(
  client: StaticKit,
  args: SendNotification.Args,
  opts: FunctionOptions = {}
): Promise<SendNotification.Response> {
  return client.invokeFunction('sendSupportEmail', args, opts);
};
