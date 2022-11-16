import { Router } from 'express';
import { upload } from '@s3-photo-download/utils/multer';
import * as apartmentsController from '../controllers/apartments.controller';

const router = Router();

router.post('/', upload.single('avatar'), apartmentsController.createApartment);
router.get('/', apartmentsController.getAllApartments);
router.get('/:apartmentId', apartmentsController.getApartment);
router.put('/:apartmentId', apartmentsController.updateApartment);
router.delete('/:apartmentId', apartmentsController.deleteApartment);

export default router;
