import {
  FunctionArgs,
  FunctionSuccess,
  Failure
} from '@statickit/core/functions';

export namespace SendNotification {
  export interface Args extends FunctionArgs {
    subject: string;
    replyTo?: string;
    fields: object;
  }

  export interface Success extends FunctionSuccess {}
  export type Response = Success | Failure;
}
