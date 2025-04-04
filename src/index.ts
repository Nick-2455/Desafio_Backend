import express from 'express';
import morgan from 'morgan';
import sequelize from './connection/connection';
import productRoutes from './routes/productRoutes';
import supplierRoutes from './routes/supplierRoutes';

// 🔥 IMPORTAR MODELOS para que Sequelize los registre
import { Product } from './models/product';
import { Supplier } from './models/supplier';

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔗 Rutas
app.use('/products', productRoutes);
app.use('/suppliers', supplierRoutes);

// 🔄 Sincronización de DB
sequelize.addModels([Product, Supplier]); // esto es CLAVE para que cree las tablas

sequelize.sync().then(() => {
  console.log('DB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => {
  console.error('DB connection error:', error);
});
