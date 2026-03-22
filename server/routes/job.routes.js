import express from 'express';
import { createJob, getAllJobs } from '../controllers/job.controllers.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/create',verifyToken, createJob);
router.get('/getAllJobs',verifyToken, getAllJobs);

export default router;