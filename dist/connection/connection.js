"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    database: 'inventory_db',
    username: 'root',
    password: 'acighine',
    models: [product_1.Product],
});
exports.default = sequelize;
