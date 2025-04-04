import {
  Table, Model, Column, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Category } from './categories';

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

  @ForeignKey(() => Category)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Categoria!: string;

  @BelongsTo(() => Category)
  category!: Category;

  @CreatedAt @Column({ type: DataType.DATE }) Creado!: Date;
  @UpdatedAt @Column({ type: DataType.DATE }) Modificado!: Date;
}