import express from 'express';
import { authenticate } from '../../../middleware/authentication';

const router = express.Router();
router.use(authenticate);
