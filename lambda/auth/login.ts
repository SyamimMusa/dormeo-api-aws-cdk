import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import AuthService from '~services/auth' // Import business logic

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const authService = new AuthService();
    const result = await authService.SignIn();

    return {
        statusCode: 200,
        body: JSON.stringify('something'),
    };
};
