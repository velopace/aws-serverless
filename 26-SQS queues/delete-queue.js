import { DeleteQueueCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from './sqs-client.mjs';

const params = {
  QueueUrl: 'https://sqs.us-east-1.amazonaws.com/704358853338/new-queue',
};

export const run = async () => {
  try {
    const data = await sqsClient.send(new DeleteQueueCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
