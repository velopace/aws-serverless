import { CreateBucketCommand } from '@aws-sdk/client-s3';
import { s3Client } from './s3-client.mjs';

const params = {
  Bucket: 'velopace-bucket-from-sdk',
};

export const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(params));
    console.log('Success', data.Location);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
