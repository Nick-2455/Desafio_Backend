import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'inventory_db',
  username: 'root',
  password: '', //! Poner tu contrasenia 
  models: [Product],
});

export default sequelize;
