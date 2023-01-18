import { DescribeTableCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddb-client.mjs';

export const params = { TableName: 'product' };

export const run = async () => {
  try {
    const data = await ddbClient.send(new DescribeTableCommand(params));
    console.log(data);
  } catch (error) {
    console.log('Error', error);
  }
};
run();
