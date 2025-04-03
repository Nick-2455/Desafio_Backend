import { NextFunction, Request, Response } from 'express';
import { Product } from '../models/product';
import { promises } from 'dns';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Error creating product' });
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const productId = req.params.id;
        const product = await Product.findByPk(productId);

        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }

        res.json(product);
    } catch (error) {
        next(error); // Correcto manejo de errores en Express
    }
};


export const updateProduct = async (req: Request, res: Response) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ error: 'Error updating product' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting product' });
  }
};
