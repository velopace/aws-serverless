import { SubscribeCommand } from '@aws-sdk/client-sns';
import { snsClient } from './sns-client.mjs';

const params = {
  Protocol: 'email',
  TopicArn: 'arn:aws:sns:us-east-1:704358853338:new-topic',
  Endpoint: 'yeydiratra@gufum.com',
};

export const run = async () => {
  try {
    const data = await snsClient.send(new SubscribeCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
