import express from 'express';
import morgan from 'morgan';
import sequelize from './connection/connection';
import productRoutes from './routes/productRoutes';
import categoryRoutes from "./routes/categoryRoutes";

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoutes);
app.use("/categories", categoryRoutes);

sequelize.sync().then(() => {
  console.log('DB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
