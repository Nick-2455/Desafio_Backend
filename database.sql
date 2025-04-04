CREATE DATABASE IF NOT EXISTS inventory_db;
USE inventory_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255),
  Descripcion TEXT,
  Precio DOUBLE,
  Proveedor VARCHAR(255),
  Cantidad INT,
  Creado DATETIME,
  Modificado DATETIME
);

CREATE TABLE suppliers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Nombre VARCHAR(255),
  Contacto VARCHAR(255),
  Telefono VARCHAR(255),
  Correo VARCHAR(255),
  Direccion VARCHAR(255),
  createdAt DATETIME,
  updatedAt DATETIME
);
 