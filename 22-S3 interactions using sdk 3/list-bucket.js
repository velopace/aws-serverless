import { ListBucketsCommand } from '@aws-sdk/client-s3';
import { s3Client } from './s3-client.mjs';

export const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log('Success', data.Buckets);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
