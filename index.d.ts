import { SendNotification } from './types';
import { StaticKit } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function sendSupportEmail(client: StaticKit, args: SendNotification.Args, opts?: FunctionOptions): Promise<SendNotification.Response>;
