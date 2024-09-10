import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class TempCdkStackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambdaNodeJs.NodejsFunction(this, 'timeOfDay', {
      entry: './lambda/timeOfDay.js',
      handler: 'index',
      runtime: lambda.Runtime.NODEJS_20_X,
    });
  }
}
