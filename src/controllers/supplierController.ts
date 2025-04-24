import { Request, Response } from 'express';
import { Supplier } from '../models/supplier';

export const getAllSuppliers = async (req: Request, res: Response) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching suppliers' });
  }
};

export const getSupplierById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const supplier = await Supplier.findByPk(id);
    if (!supplier) return res.status(404).json({ error: 'Supplier not found' });
    res.setHeader("Cache-Control", "no-store");
    res.json(supplier);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching supplier' });
  }
};

export const createSupplier = async (req: Request, res: Response) => {
  try {
    const newSupplier = await Supplier.create(req.body);
    res.status(201).json(newSupplier);
  } catch (error) {
    res.status(500).json({ error: 'Error creating supplier' });
  }
};

export const updateSupplier = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await Supplier.update(req.body, { where: { id } });
    res.json({ message: 'Supplier updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating supplier' });
  }
};

export const deleteSupplier = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await Supplier.destroy({ where: { id } });
    res.json({ message: 'Supplier deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting supplier' });
  }
};