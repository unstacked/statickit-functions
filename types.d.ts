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

export namespace Stripe {
  export namespace CreateCustomer {
    export interface Args extends FunctionArgs {
      name?: string;
      description?: string;
      email?: string;
      metadata?: object;
      source?: string;
    }

    export interface Success extends FunctionSuccess {
      id: string;
      customerToken: string;
    }

    export type Response = Success | Failure;
  }
}

export namespace Stripe {
  export namespace CreateCharge {
    export interface Args extends FunctionArgs {
      amount: number;
      currency?: string;
      description?: string;
      metadata?: object;
      source?: string;
      customerToken?: string;
    }

    export interface Success extends FunctionSuccess {
      id: string;
      paymentStatus: "succeeded" | "pending" | "failed";
    }

    export type Response = Success | Failure;
  }
}

export namespace Stripe {
  export namespace CreateSubscription {
    export interface Args extends FunctionArgs {
      customerToken: string;
      items: Array<{
        plan: string;
        quantity?: number;
        metadata?: object;
      }>;
      metadata?: object;
      coupon?: string;
    }

    export interface Success extends FunctionSuccess {
      id: string;
      subscriptionStatus:
        | "incomplete"
        | "incomplete_expired"
        | "trialing"
        | "active"
        | "past_due"
        | "canceled"
        | "unpaid";
    }

    export type Response = Success | Failure;
  }
}
