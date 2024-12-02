# Typescript Monorepo with AWS Lambda, CI/CD, and SAM Deployment

This repository contains a TypeScript-based Monorepo solution with a Lambda function, CI/CD using GitHub Actions, and deployment using AWS SAM (Serverless Application Model). The Lambda function accepts a query string parameter and returns a personalized greeting.

## Folder Structure

```plaintext

Prerequisites
Before running or deploying this solution, ensure you have the following:

Node.js (v14 or higher)
Yarn (v1.22 or higher)
AWS CLI (v2 or higher)
AWS SAM CLI (v1.34 or higher)
GitHub Account and AWS Account (for CI/CD and deployment)
Setting Up the Project Locally
Clone the repository:

git clone https://github.com/muhammedminhal/ts-monorepo.git
cd your-repository
Install dependencies using Yarn:

yarn install
Install TypeScript globally :

npm install -g typescript
Install the AWS SAM CLI :

Follow the instructions from the official AWS SAM CLI documentation to install the SAM CLI.

Running Unit Tests
The repository uses Jest for unit testing. You can run the tests with the following command:

yarn test
Linting
The repository is configured with ESLint for code quality. To run linting, use the following command:

yarn lint
AWS Lambda Deployment using SAM
Configure AWS credentials:

Ensure that your AWS credentials are set up on your local machine. You can configure your AWS CLI by running:

aws configure
This will prompt you to enter your AWS access key, secret key, region, and output format.

Build the SAM application:

Run the following command to build your Lambda function and other resources:

sam build
Deploy the SAM application:

Deploy the function to AWS with the following command:

sam deploy --guided
This will prompt you for a stack name, region, and other deployment settings. Once the deployment is complete, it will output the API Gateway URL.


GitHub Actions CI/CD Pipeline
The repository is set up with a GitHub Actions CI/CD pipeline that automatically deploys your Lambda function to AWS when changes are pushed to the master branch.

GitHub Secrets:

In your GitHub repository, go to Settings > Secrets > Actions, and add the following secrets:

AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY


GitHub Actions Workflow:

The GitHub Actions pipeline is defined in .github/workflows/ci.yml. The pipeline includes the following steps:

1.Check out the code from the repository.
2.Set up Node.js and install dependencies.
3.run lint
4.Run the Jest tests.
5.Deploy the Lambda function using the AWS SAM CLI.
6.The action uses the aws-actions/configure-aws-credentials action to authenticate with AWS using the secrets you’ve added to GitHub.