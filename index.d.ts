import { Stripe } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function createCharge(client: StaticKit, args: Stripe.CreateCharge.Args, opts?: FunctionOptions): Promise<Stripe.CreateCharge.Response>;
export declare function createClient(config: Config): StaticKit;

