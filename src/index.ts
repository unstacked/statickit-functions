import { StaticKit, createClient } from "@statickit/core";
import { SendNotification } from "@statickit/core/functions";

export { StaticKit, createClient } from "@statickit/core";
export { SendNotification } from "@statickit/core/functions";

export function sendEmail(
  client: StaticKit,
  args: SendNotification.Args,
  opts: FunctionOptions = {}
): Promise<SendNotification.Response> {
  return client.invoke("sendEmail", args, opts);
};
