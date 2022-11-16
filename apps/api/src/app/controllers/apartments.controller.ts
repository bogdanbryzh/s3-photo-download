import { Request, Response } from 'express';
import { donwloadFileFromS3 } from '@s3-photo-download/utils/storage';

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

  const imageFile = await donwloadFileFromS3(image);

  console.log(`result`);
  console.log(JSON.stringify(imageFile, null, 2));

  response.status(200).json({
    message: 'ok',
  });
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
