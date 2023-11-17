import express from 'express';
const router = express.Router();
import { getPost } from '../controllers/post.js';

router.get('/', getPost);

export default router;