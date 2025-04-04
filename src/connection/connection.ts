import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Supplier } from '../models/supplier'; 

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'inventory_db',
  username: 'root',
  password: '', //! Poner tu contrasenia
  models: [Product, Supplier] 
});

export default sequelize;
