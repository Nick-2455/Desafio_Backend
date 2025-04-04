# Inventario de Productos - Backend 

## 🚀 Descripción General
Este proyecto es un **CRUD (Create, Read, Update, Delete)** desarrollado con **Node.js, Express, TypeScript, Sequelize y MySQL**. Su objetivo es manejar un inventario de productos con operaciones básicas de administración a través de una API REST.

---

## 🤖 Tecnologías utilizadas
- **Node.js**: entorno de ejecución de JavaScript
- **Express**: framework de servidor HTTP
- **TypeScript**: superset de JavaScript tipado
- **Sequelize**: ORM para conectarse con MySQL
- **MySQL**: base de datos relacional
- **Nodemon + Concurrently**: para desarrollo en tiempo real

---

## 📂 Estructura de carpetas
```
src/
├── connection/        # Conexión a la base de datos
├── controllers/       # Lógica de negocio
├── models/            # Definición del modelo Product
├── routes/            # Endpoints de la API
└── index.ts           # Archivo principal
database.sql           # Script para crear base de datos y tabla
.gitignore             # Archivo para excluir node_modules y dist
```

---

## 🔗 Conexión a la base de datos
Archivo: `src/connection/connection.ts`

```ts
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'inventory_db',
  username: 'root',
  password: 'TU_CONTRASENA',
  models: [Product],
});
```

> Asegúrate de crear la base de datos `inventory_db` antes de correr el servidor. Puedes usar el archivo `database.sql` incluido en el proyecto para crear la base de datos y la tabla fácilmente.

---

## 🌐 Endpoints disponibles

### POST `/products`
- Crea un nuevo producto
- Body:
```json
{
  "Nombre": "Jabón artesanal",
  "Descripcion": "Con lavanda y avena",
  "Precio": 65.5,
  "Proveedor": "Saboneria Danna",
  "Cantidad": 25,
  "Categoria: "Limpieza"
}
```

### GET `/products`
- Obtiene todos los productos

### GET `/products/:id`
- Obtiene un producto por su ID

### PATCH `/products/:id`
- Actualiza campos específicos de un producto
- Body:
```json
{
  "Precio": 72,
  "Cantidad": 30
}
```

### DELETE `/products/:id`
- Elimina un producto por ID

---

## 📃 Modelo: `Product`
Archivo: `src/models/product.ts`

```ts
@Table({
  tableName: 'products',
  createdAt: 'Creado',
  updatedAt: 'Modificado'
})
export class Product extends Model {
  @Column({ type: DataType.STRING }) Nombre!: string;
  @Column({ type: DataType.STRING }) Descripcion!: string;
  @Column({ type: DataType.DOUBLE }) Precio!: number;
  @Column({ type: DataType.STRING }) Proveedor!: string;
  @Column({ type: DataType.INTEGER }) Cantidad!: number;

  @CreatedAt @Column({ type: DataType.DATE }) Creado!: Date;
  @UpdatedAt @Column({ type: DataType.DATE }) Modificado!: Date;
}
```

---

## 📝 Comandos importantes

### Instalar dependencias
```bash
npm install
```

### Compilar TypeScript
```bash
npm run build
```

### Iniciar servidor en modo desarrollo
```bash
npm run dev
```

---

## 📌 Buenas prácticas con Git
- No subir `node_modules/`, `dist/`, ni archivos sensibles.
- Usar un archivo `.gitignore` con el siguiente contenido:

```
node_modules/
dist/
.env
```

- Subir únicamente el código fuente, scripts de base de datos y archivos de configuración necesarios.

---

## ✅ Resultado esperado
- API REST funcional en `http://localhost:3000/products`
- Conexión estable con base de datos MySQL
- Capacidad para crear, leer, actualizar y eliminar productos


