#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TempCdkStackStack } from '../lib/temp_cdk_stack-stack';

const app = new cdk.App();
new TempCdkStackStack(app, 'TempCdkStackStack', {});