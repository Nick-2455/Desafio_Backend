"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.createProduct = exports.getAllProducts = void 0;
const product_1 = require("../models/product");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.Product.findAll();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});
exports.getAllProducts = getAllProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield product_1.Product.create(req.body);
        res.status(201).json(newProduct);
    }
    catch (err) {
        res.status(500).json({ error: 'Error creating product' });
    }
});
exports.createProduct = createProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_1.Product.findByPk(req.params.id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    }
    catch (err) {
        res.status(500).json({ error: 'Error fetching product' });
    }
});
exports.getProductById = getProductById;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_1.Product.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Product updated' });
    }
    catch (err) {
        res.status(500).json({ error: 'Error updating product' });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield product_1.Product.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Product deleted' });
    }
    catch (err) {
        res.status(500).json({ error: 'Error deleting product' });
    }
});
exports.deleteProduct = deleteProduct;
