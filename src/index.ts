import express from 'express';
import morgan from 'morgan';
import sequelize from './connection/connection';

import productRoutes from './routes/productRoutes';
import supplierRoutes from './routes/supplierRoutes';
import categoryRoutes from './routes/categoryRoutes';

// Importar modelos para que Sequelize los registre correctamente
import { Product } from './models/product';
import { Supplier } from './models/supplier';
import { Category } from './models/categories';

const app = express();
const PORT = 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);
app.use('/categories', categoryRoutes);

// Sincronizar con la base de datos
sequelize.sync({ force: true }) 
  .then(() => {
    console.log('DB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('DB connection error:', error);
  });
