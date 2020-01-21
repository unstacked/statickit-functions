import { SendNotification, Mailchimp } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function addToMailchimp(client: StaticKit, args: Mailchimp.CreateEvent.Args, opts?: FunctionOptions): Promise<Mailchimp.CreateEvent.Response>;
export declare function sendEmail(client: StaticKit, args: SendNotification.Args, opts?: FunctionOptions): Promise<SendNotification.Response>;
export declare function createClient(config: Config): StaticKit;

