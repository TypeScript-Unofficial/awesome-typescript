import type { Entry } from "../types.js";

/** Tools for deploying and operating TypeScript services. */
export const infrastructure: Entry[] = [
  // ---------------------------------------------------------------------------
  // Cloud
  // ---------------------------------------------------------------------------
  {
    category: "infrastructure/cloud",
    name: "aws/aws-cdk",
    repository: "https://github.com/aws/aws-cdk",
    package: "aws-cdk",
    packageUrl: "https://www.npmjs.com/package/aws-cdk",
    description: "Define cloud infrastructure using familiar programming languages.",
  },
  {
    category: "infrastructure/cloud",
    name: "aws/aws-sdk-js-v3",
    repository: "https://github.com/aws/aws-sdk-js-v3",
    package: "@aws-sdk/client-s3",
    packageUrl: "https://www.npmjs.com/package/@aws-sdk/client-s3",
    description: "AWS SDK for JavaScript, version 3.",
  },
  {
    category: "infrastructure/cloud",
    name: "googleapis/google-cloud-node",
    repository: "https://github.com/googleapis/google-cloud-node",
    package: "@google-cloud/storage",
    packageUrl: "https://www.npmjs.com/package/@google-cloud/storage",
    description: "Google Cloud client libraries for Node.js.",
  },

  // ---------------------------------------------------------------------------
  // Serverless
  // ---------------------------------------------------------------------------
  {
    category: "infrastructure/serverless",
    name: "serverless/serverless",
    repository: "https://github.com/serverless/serverless",
    package: "serverless",
    packageUrl: "https://www.npmjs.com/package/serverless",
    description: "Serverless application framework for building and deploying functions.",
  },
  {
    category: "infrastructure/serverless",
    name: "sst/sst",
    repository: "https://github.com/sst/sst",
    package: "sst",
    packageUrl: "https://www.npmjs.com/package/sst",
    description: "Build full-stack serverless applications on AWS.",
  },

  // ---------------------------------------------------------------------------
  // Containers
  // ---------------------------------------------------------------------------
  {
    category: "infrastructure/containers",
    name: "balena-io/etcher",
    repository: "https://github.com/balena-io/etcher",
    description: "Flash OS images to SD cards and USB drives.",
  },
  {
    category: "infrastructure/containers",
    name: "docker/compose",
    repository: "https://github.com/docker/compose",
    description: "Define and run multi-container applications with Docker.",
  },

  // ---------------------------------------------------------------------------
  // Infrastructure as Code
  // ---------------------------------------------------------------------------
  {
    category: "infrastructure/iac",
    name: "pulumi/pulumi",
    repository: "https://github.com/pulumi/pulumi",
    package: "@pulumi/pulumi",
    packageUrl: "https://www.npmjs.com/package/@pulumi/pulumi",
    description: "Infrastructure as code using familiar programming languages.",
  },
];
