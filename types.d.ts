import {
  FunctionArgs,
  FunctionSuccess,
  Failure
} from "@statickit/core/functions";

export namespace SendNotification {
  export interface Args extends FunctionArgs {
    subject: string;
    replyTo?: string;
    fields: object;
  }

  export interface Success extends FunctionSuccess {}
  export type Response = Success | Failure;
}

export namespace Mailchimp {
  export namespace AddOrUpdateListMember {
    export interface Args extends FunctionArgs {
      emailAddress: string;
      mergeFields?: object;
    }

    export interface Success extends FunctionSuccess {
      id: string;
    }

    export type Response = Success | Failure;
  }
}

export namespace Mailchimp {
  export namespace CreateEvent {
    export interface Args extends FunctionArgs {
      emailAddress: string;
      mergeFields?: object;
    }

    export interface Success extends FunctionSuccess {
      id: string;
    }

    export type Response = Success | Failure;
  }
}
