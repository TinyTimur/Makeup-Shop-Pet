import express from 'express';
import { postCart } from '../controllers/cartController.js';

const router = express.Router();

router.post('/postCart', postCart);
// router.patch('/:id', updateCart);

export default router;
