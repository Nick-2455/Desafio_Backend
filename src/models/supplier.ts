import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Product } from './product';

@Table({ tableName: 'suppliers' })
export class Supplier extends Model {
  @Column({ type: DataType.STRING }) Nombre!: string;
  @Column({ type: DataType.STRING }) Contacto!: string;
  @Column({ type: DataType.STRING }) Telefono!: string;
  @Column({ type: DataType.STRING }) Correo!: string;
  @Column({ type: DataType.STRING }) Direccion!: string;

  @HasMany(() => Product)
  productos!: Product[];
}
