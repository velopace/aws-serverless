import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddb-client.mjs';

export const params = {
  Statement: 'SELECT * FROM product  WHERE id=?',
  Parameters: [{ N: '3' }],
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new ExecuteStatementCommand(params));
    console.log(data);
  } catch (error) {
    console.log('Error', error);
  }
};
run();
