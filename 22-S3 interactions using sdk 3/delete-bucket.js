import { DeleteBucketCommand } from '@aws-sdk/client-s3';
import { s3Client } from './s3-client.mjs';

const params = {
  Bucket: 'velopace-bucket-from-sdk',
};

export const run = async () => {
  try {
    const data = await s3Client.send(new DeleteBucketCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
