import { Request, Response, NextFunction } from 'express';
import { Product } from '../models/product';
import { Category } from '../models/categories';
import { Supplier } from '../models/supplier';

// Obtener todos los productos con categoría y proveedor
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      include: [
        { association: 'categoria' },
        { association: 'proveedor' }
      ]
    });

    res.setHeader("Cache-Control", "no-store");
    res.json(products);
  } catch (err) {
    console.error("Error al obtener productos:", err);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

// Obtener un producto por ID
export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const productId = req.params.id;

    const product = await Product.findByPk(productId, {
      include: [
        { association: 'categoria' },
        { association: 'proveedor' }
      ]
    });

    if (!product) {
      res.status(404).json({ message: "Producto no encontrado" });
      return;
    }

    res.json(product);
  } catch (error) {
    next(error); 
  }
};

// Crear un nuevo producto
export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error al crear producto:', err); 
    res.status(500).json({ error: 'Error creating product' });
  }
};

// Actualizar un producto
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const [updated] = await Product.update(req.body, {
      where: { id: productId }
    });

    if (updated === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const updatedProduct = await Product.findByPk(productId, {
      include: [
        { association: 'categoria' },
        { association: 'proveedor' }
      ]
    });

    res.json(updatedProduct);
  } catch (err) {
    console.error("Error al actualizar producto:", err);
    res.status(500).json({ error: "Error updating product" });
  }
};

// Eliminar un producto
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const deleted = await Product.destroy({
      where: { id: productId }
    });

    if (deleted === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado correctamente" });
  } catch (err) {
    console.error("Error al eliminar producto:", err);
    res.status(500).json({ error: "Error deleting product" });
  }
};
