import { Request, Response } from 'express';
import { Category } from '../models/categories';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.setHeader("Cache-Control", "no-store");
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la categoría' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const nuevaCategoria = await Category.create(req.body);
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear categoría' });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    await Category.update(req.body, { where: { id: req.params.id } });
    res.json({ message: 'Categoría actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar categoría' });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar categoría' });
  }
};
