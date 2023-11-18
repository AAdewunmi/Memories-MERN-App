import express from 'express';
const router = express.Router();
import { getPost, createPost} from '../controllers/post.js';

router.get('/', getPost);
router.post('/', createPost);

export default router;