import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "World";
  const invalidChars = /[^a-zA-Z0-9\s]/;

  // validation to check Characters are valid
  if (invalidChars.test(name)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid characters in name." }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}` }),
  };
};
