import { Request, Response } from 'express';
import { donwloadFileFromS3 } from '@s3-photo-download/utils/storage';
import { PassThrough } from 'stream';

export const createApartment = (request: Request, response: Response) => {
  response.status(200).json({
    message: 'ok',
  });
};

export const getAllApartments = (request: Request, response: Response) => {
  response.status(200).json({
    message: 'ok',
  });
};

export const getApartment = async (request: Request, response: Response) => {
  const image = {
    Bucket: 'vpasiuta-test-bucket',
    Key: '97bea3d33f21fba2b84dc8f0df91bb3e',
  };

  const imageFile = await (
    await donwloadFileFromS3(image)
  ).Body.transformToByteArray();

  const stream = new PassThrough();

  stream.end(imageFile);
  response.set('Content-Disposition', `attachment; filename=${image.Key}.png`);
  response.set('Content-Type', 'image/png');
  stream.pipe(response);

  response.status(200);
};

export const updateApartment = (request: Request, response: Response) => {
  response.status(200).json({
    message: 'ok',
  });
};

export const deleteApartment = (request: Request, response: Response) => {
  response.status(200).json({
    message: 'ok',
  });
};
