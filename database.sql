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
