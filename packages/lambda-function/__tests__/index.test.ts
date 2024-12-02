import { handler } from "../src/index";
import { APIGatewayProxyEvent } from 'aws-lambda';

test("Returns 'Hello, John' when name is provided", async () => {
  const event = { queryStringParameters: { name: "John" } } as APIGatewayProxyEvent;
  const response = await handler(event);
  expect(response.statusCode).toBe(200);
  expect(JSON.parse(response.body)).toEqual({ message: "Hello, John" });
});

test("Returns 'Hello, World' when no name is provided", async () => {
  const event = { queryStringParameters: {} } as APIGatewayProxyEvent;
  const response = await handler(event);
  expect(response.statusCode).toBe(200);
  expect(JSON.parse(response.body)).toEqual({ message: "Hello, World" });
});

test("Returns error for invalid name characters", async () => {
  const event = { queryStringParameters: { name: "John@" } } as APIGatewayProxyEvent;
  const response = await handler(event);
  expect(response.statusCode).toBe(400);
  expect(JSON.parse(response.body)).toEqual({ error: "Invalid characters in name." });
});
