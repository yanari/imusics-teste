import AWS from 'aws-sdk';

export const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
  region: 'sa-east-1',
  params: {
    Bucket: process.env.REACT_APP_AWS_BUCKET_NAME,
  },
});
