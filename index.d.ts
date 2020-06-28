import { SendNotification, Stripe } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function createCustomer(client: StaticKit, args: Stripe.CreateCustomer.Args, opts?: FunctionOptions): Promise<Stripe.CreateCustomer.Response>;
export declare function createSubscription(client: StaticKit, args: Stripe.CreateSubscription.Args, opts?: FunctionOptions): Promise<Stripe.CreateSubscription.Response>;
export declare function submitContactForm(client: StaticKit, args: SendNotification.Args, opts?: FunctionOptions): Promise<SendNotification.Response>;
export declare function createClient(config: Config): StaticKit;

