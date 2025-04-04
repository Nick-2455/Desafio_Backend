import { Router } from 'express';
import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsCategory
} from '../controllers/productController';

const router = Router();

router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get("/", getProductsCategory);

export default router;
