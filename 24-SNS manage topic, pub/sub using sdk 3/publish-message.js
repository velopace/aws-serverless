import { PublishCommand } from '@aws-sdk/client-sns';
import { snsClient } from './sns-client.mjs';

const params = {
  TopicArn: 'arn:aws:sns:us-east-1:704358853338:new-topic',
  Message: 'Example publish command message',
};

export const run = async () => {
  try {
    const data = await snsClient.send(new PublishCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
