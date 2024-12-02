import { handler } from "../src/index";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

describe("Lambda Function Tests", () => {
  test("Returns 'Hello, John' when name is provided", async () => {
    const event = {
      queryStringParameters: { name: "John" },
    } as unknown as APIGatewayProxyEvent;

    const response: APIGatewayProxyResult = await handler(event);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ message: "Hello, John" });
  });

  test("Returns 'Hello, World' when no name is provided", async () => {
    const event = {
      queryStringParameters: null, // Handles when query parameters are not provided
    } as unknown as APIGatewayProxyEvent;

    const response: APIGatewayProxyResult = await handler(event);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ message: "Hello, World" });
  });

  test("Returns error for invalid name characters", async () => {
    const event = {
      queryStringParameters: { name: "John@" },
    } as unknown as APIGatewayProxyEvent;

    const response: APIGatewayProxyResult = await handler(event);
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.body)).toEqual({ error: "Invalid characters in name." });
  });

  test("Returns error for empty name parameter", async () => {
    const event = {
      queryStringParameters: { name: "" },
    } as unknown as APIGatewayProxyEvent;

    const response: APIGatewayProxyResult = await handler(event);
    expect(response.statusCode).toBe(400);
    expect(JSON.parse(response.body)).toEqual({ error: "Name cannot be empty." });
  });
});
