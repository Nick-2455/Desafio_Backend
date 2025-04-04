# 📦 Backend de Sistema de Inventario

Este proyecto es un backend desarrollado en **TypeScript**, usando **Express** y **Sequelize**, conectado a una base de datos **MySQL**. Incluye entidades como:

-  Productos
-  Proveedores
-  Categorías

---

## 🚀 Cómo clonar y correr el proyecto

### 1. Clonar el repositorio

Abre una terminal y escribe:

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
````

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar la base de datos

#### ✅ Opción recomendada (rápida):

1. Abre **MySQL Workbench** o tu cliente favorito.
    
2. Crea la base de datos:
    

```sql
CREATE DATABASE inventory_db;
```

3. Ejecuta el archivo `database.sql` que viene en el repositorio para crear las tablas (`suppliers`, `categories`, `products`).
    

---

### 4. Verificar conexión en `src/connection/connection.ts`

Asegúrate de tener la configuración correcta:

```ts
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  database: 'inventory_db',
  username: 'root',
  password: 'TU_CONTRASEÑA',
  models: [Product, Supplier, Category]
});
```

> 💡 Cambia el `username` y `password` según tu configuración local.

---

### 5. Compilar el proyecto

Este backend está hecho en TypeScript, así que compílalo:

```bash
npx tsc
```

Esto creará la carpeta `/dist` con el código en JavaScript.

---

### 6. Levantar el servidor

#### En modo producción:

```bash
npm run start
```

#### En modo desarrollo (con recarga automática):

```bash
npm run dev
```

Verás en consola algo como:

```
DB connected
Server running on port 3000
```

---

### 7. Probar el API con Postman

Puedes probar las siguientes rutas:

#### 🧾 Proveedores (`/suppliers`)

- `GET /suppliers` → Ver todos
    
- `GET /suppliers/1` → Ver uno por ID
    
- `POST /suppliers`
    

```json
{
  "Nombre": "TechWorld",
  "Contacto": "Juan Pérez",
  "Telefono": "6621234567",
  "Correo": "contacto@techworld.com",
  "Direccion": "Calle 123, Hermosillo"
}
```

#### 🗂 Categorías (`/categories`)

- `GET /categories`
    
- `POST /categories`
    

```json
{
  "Nombre": "Laptops"
}
```

#### 📦 Productos (`/products`)

> Asegúrate de tener `supplierId` y `categoryId` válidos antes de crear un producto.

- `GET /products`
    
- `POST /products`
    

```json
{
  "Nombre": "Laptop HP",
  "Descripcion": "Laptop de gama alta",
  "Precio": 13500.99,
  "Cantidad": 10,
  "supplierId": 1,
  "categoryId": 1
}
```

---


