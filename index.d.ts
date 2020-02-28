import { SendNotification, Mailchimp } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function addToMailchimp(client: StaticKit, args: Mailchimp.AddOrUpdateListMember.Args, opts?: FunctionOptions): Promise<Mailchimp.AddOrUpdateListMember.Response>;
export declare function sendContactEmail(client: StaticKit, args: SendNotification.Args, opts?: FunctionOptions): Promise<SendNotification.Response>;
export declare function sendSubscribeEmail(client: StaticKit, args: SendNotification.Args, opts?: FunctionOptions): Promise<SendNotification.Response>;
export declare function createClient(config: Config): StaticKit;

