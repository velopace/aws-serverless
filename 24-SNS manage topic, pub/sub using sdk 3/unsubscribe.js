import { UnsubscribeCommand } from '@aws-sdk/client-sns';
import { snsClient } from './sns-client.mjs';

const params = {
  SubscriptionArn:
    'arn:aws:sns:us-east-1:704358853338:new-topic:e7c76478-b824-4a85-8866-8ecf1c5c05d1',
};

export const run = async () => {
  try {
    const data = await snsClient.send(new UnsubscribeCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
