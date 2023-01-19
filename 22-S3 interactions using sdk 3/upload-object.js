import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from './s3-client.mjs';
import { fs } from 'file-system';

const file = './index.html';
const fileStream = fs.createReadStream(file);

const params = {
  Bucket: 'velopace-bucket-from-sdk',
  Key: 'index.html',
  Body: fileStream,
};

export const run = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(params));
    console.log('Success', data);
  } catch (err) {
    console.log('Error', err);
  }
};
run();
