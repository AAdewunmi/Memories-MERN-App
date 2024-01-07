import express from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";

const router = express.Router();
router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.patch("/:id", deletePost);

export default router;