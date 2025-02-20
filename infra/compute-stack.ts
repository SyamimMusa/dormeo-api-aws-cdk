import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { authRoutes } from '~lambda/auth/auth-routes'

export class ComputeStack extends cdk.Stack {
    public readonly api: apigateway.RestApi;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const api = new apigw.RestApi(this, 'ApiGateway', {
            restApiName: 'MyAppAPI',
            deployOptions: { stageName: 'prod' },
        });

        authRoutes.forEach((route) => {
            const lambdaFunction = new lambda.Function(this, `${route.path}-Lambda`, {
                runtime: lambda.Runtime.NODEJS_18_X,
                handler: 'handler',
                code: lambda.Code.fromAsset(route.lambdaPath),
            });

            // Add to API Gateway
            const resource = api.root.addResource(route.path);
            resource.addMethod(route.method, new apigw.LambdaIntegration(lambdaFunction));
        })
    }
}