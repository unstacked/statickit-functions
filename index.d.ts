import { SendNotification, Stripe, Mailchimp } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function addToMailchimp(client: StaticKit, args: Mailchimp.CreateEvent.Args, opts?: FunctionOptions): Promise<Mailchimp.CreateEvent.Response>;
export declare function createCharge(client: StaticKit, args: Stripe.CreateCharge.Args, opts?: FunctionOptions): Promise<Stripe.CreateCharge.Response>;
export declare function createCustomer(client: StaticKit, args: Stripe.CreateCustomer.Args, opts?: FunctionOptions): Promise<Stripe.CreateCustomer.Response>;
export declare function createSubscription(client: StaticKit, args: Stripe.CreateSubscription.Args, opts?: FunctionOptions): Promise<Stripe.CreateSubscription.Response>;
export declare function sendEmail(client: StaticKit, args: SendNotification.Args, opts?: FunctionOptions): Promise<SendNotification.Response>;
export declare function createClient(config: Config): StaticKit;

