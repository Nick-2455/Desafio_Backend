import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product';
import { Category } from '../models/category';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'inventory_db',
  username: 'root',
  password: '#Bogdantroika2020', //! Poner tu contrasenia 
  models: [Category, Product], // Agregar el modelo Category aquí
});

export default sequelize;
