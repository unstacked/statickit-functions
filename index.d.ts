import { Stripe } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function createSubscription(client: StaticKit, args: Stripe.CreateSubscription.Args, opts?: FunctionOptions): Promise<Stripe.CreateSubscription.Response>;
export declare function createClient(config: Config): StaticKit;

