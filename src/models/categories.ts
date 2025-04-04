import {
  Table, Model, Column, DataType, CreatedAt, UpdatedAt
} from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  createdAt: 'Creado',
  updatedAt: 'Modificado'
})
export class Category extends Model {
  @Column({ type: DataType.STRING}) Nombre!: string;

  @CreatedAt @Column({ type: DataType.DATE }) Creado!: Date;
  @UpdatedAt @Column({ type: DataType.DATE }) Modificado!: Date;
}