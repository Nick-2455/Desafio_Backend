import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Supplier } from '../models/supplier';
import { Category } from '../models/categories';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'inventory_db',
  username: 'root',
  password: 'acighine', //! pon tu contraseña
  models: [Product, Supplier, Category]
});

export default sequelize;
