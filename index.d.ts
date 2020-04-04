import { ConvertKit } from './types';
import { StaticKit, Config } from '@statickit/core';
import { FunctionOptions } from '@statickit/core/functions';

export declare function addToConvertKit(client: StaticKit, args: ConvertKit.ApplyTags.Args, opts?: FunctionOptions): Promise<ConvertKit.ApplyTags.Response>;
export declare function createClient(config: Config): StaticKit;

