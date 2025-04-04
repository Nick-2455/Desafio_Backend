import {
  Table,
  Model,
  Column,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript';
import { Supplier } from './supplier';
import { Category } from './categories';

@Table({
  tableName: 'products',
  createdAt: 'Creado',
  updatedAt: 'Modificado'
})
export class Product extends Model {
  @Column({ type: DataType.STRING }) Nombre!: string;
  @Column({ type: DataType.STRING }) Descripcion!: string;
  @Column({ type: DataType.DOUBLE }) Precio!: number;
  @Column({ type: DataType.INTEGER }) Cantidad!: number;

  @ForeignKey(() => Supplier)
  @Column({ type: DataType.INTEGER })
  supplierId!: number;

  @BelongsTo(() => Supplier)
  proveedor!: Supplier;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId!: number;

  @BelongsTo(() => Category)
  categoria!: Category;

  @CreatedAt @Column({ type: DataType.DATE }) Creado!: Date;
  @UpdatedAt @Column({ type: DataType.DATE }) Modificado!: Date;
}
