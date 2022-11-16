import { Router } from 'express';
import apartmentsRouter from './apartments.router';

const router = Router();

router.use('/apartments', apartmentsRouter);

export default router;
