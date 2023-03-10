import { BatchGetItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddb-client.mjs';

export const params = {
  RequestItems: {
    product: {
      Keys: [
        {
          id: { N: '1' },
        },
        {
          id: { N: '2' },
        },
      ],
      ProjectionExpression: 'productName',
    },
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new BatchGetItemCommand(params));
    console.log(data.Responses.product);
  } catch (error) {
    console.log('Error', error);
  }
};
run();
