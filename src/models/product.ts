import {
  Table, Model, Column, DataType, CreatedAt, UpdatedAt
} from 'sequelize-typescript';
import { Category } from './category';

@Table({
  tableName: 'products',
  createdAt: 'Creado',
  updatedAt: 'Modificado'
})
export class Product extends Model {
  @Column({ type: DataType.STRING}) Nombre!: string;
  @Column({ type: DataType.STRING}) Descripcion!: string;
  @Column({ type: DataType.DOUBLE}) Precio!: number;
  @Column({ type: DataType.STRING}) Proveedor!: string;
  @Column({ type: DataType.INTEGER}) Cantidad!: number;
  @Column({ type: DataType.STRING, references: { model: Category, key: 'Nombre' } }) Categoria!: string;

  @CreatedAt @Column({ type: DataType.DATE }) Creado!: Date;
  @UpdatedAt @Column({ type: DataType.DATE }) Modificado!: Date;
}