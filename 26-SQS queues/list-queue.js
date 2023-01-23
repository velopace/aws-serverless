import { ListQueuesCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from './sqs-client.mjs';

export const run = async () => {
  try {
    const data = await sqsClient.send(new ListQueuesCommand({}));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
