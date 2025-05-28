-- Crear base de datos
CREATE DATABASE chile_stream;
USE chile_stream;

-- Tabla de usuarios
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE,
  contrasena VARCHAR(255)
);

-- Tabla de películas
CREATE TABLE peliculas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  descripcion TEXT,
  imagen_url VARCHAR(255)
);

-- Tabla de opiniones
CREATE TABLE opiniones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_pelicula INT,
  comentario TEXT,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  FOREIGN KEY (id_pelicula) REFERENCES peliculas(id)
);
