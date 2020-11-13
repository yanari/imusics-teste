import { OctadeskAPI } from './octadesk';
import { s3 } from './aws-s3';

export const octadeskApi = new OctadeskAPI();

export const uploadFile = async (key, file) => {
  const response = await s3.upload({ Key: key, Body: file, ContentType: file.type }).promise();
  return response.Location;
};

