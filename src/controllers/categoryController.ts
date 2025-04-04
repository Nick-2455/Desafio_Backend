import { Request, Response } from 'express';
import { Category } from '../models/categories';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener categorías" });
    }
};

export const createCategory = async (req: Request, res: Response) => {
    try {
        const {Nombre } = req.body;
        const newCategory = await Category.create({ Nombre });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: "Error al crear categoría" });
    }
};