import { ListObjectsV2Command } from '@aws-sdk/client-s3';
import { marshall } from '@aws-sdk/util-dynamodb';
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddb-client.mjs';
import { s3Client } from './s3-client.mjs';

export const handler = async (event) => {
  console.log('request:', JSON.stringify(event, undefined, 2));

  try {
    // 1- List objects into bucket
    const params = {
      Bucket: event.Records[0].s3.bucket.name, // "velopace-test-bucket"  // event.Records[0].s3.bucket.name
    };
    const objectList = await s3Client.send(new ListObjectsV2Command(params));
    console.log('Success', objectList);

    // 2- write on dynamodb table
    for (const content of objectList.Contents) {
      console.log('Content: %j', content);

      // create item into dynamoDB
      const params = {
        TableName: 'test-table',
        Item: marshall(content || {}, {
          removeUndefinedValues: true,
          convertClassInstanceToMap: true,
        }),
      };

      const createResult = await ddbClient.send(new PutItemCommand(params));
      console.log(createResult);
    }
  } catch (e) {
    console.error(e);
  }
};
