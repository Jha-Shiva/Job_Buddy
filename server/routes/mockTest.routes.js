import express from 'express';
import { createMockTest, getAllMockTest, getMockTestbyId } from '../controllers/mockTest.controllers.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, getAllMockTest)
router.get('/:id', verifyToken, getMockTestbyId)
router.post('/create',verifyToken, createMockTest);

export default router;