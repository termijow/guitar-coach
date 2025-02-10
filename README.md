## Instalar el servidor de mysql workbench

Hay que instalar primero el mysql 
```
sudo apt install mysql 
```
### Para configurar el servidor de mysql
```sql
sudo mysql -u root -p

# Ejecutar estas querys en el CLI de mysql
CREATE USER '(usuario a crear)'@'localhost' IDENTIFIED BY '0xcwaqsAP1234!';

# Da los permisos necesarios al usuario creado
GRANT ALL PRIVILEGES ON *.* TO '(usuario creado)'@'localhost' WITH GRANT OPTION;

# Muestra las bases de datos
SHOW DATABASES;

# Si no está en la lista, hay que crearla.
CREATE DATABASE prueba;
```
Hay que revisar si se creó correctamente la base de datos, luego de eso, se ponen los datos en el tableplus o mysql Workbench y comprobar que funcione correctamente.
Luego de eso, ya se puede continuar con la ejecución del proyecto normalmente.

### Base de datos en mysql workbench o tableplus, para comprobar que funcione correctamente.

```
CREATE DATABASE guitar_coach;

USE guitar_coach;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100) UNIQUE
);

CREATE TABLE tutoriales (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255),
  descripcion TEXT,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  comentario TEXT,
  id_tutorial INT,
  FOREIGN KEY (id_tutorial) REFERENCES tutoriales(id)
);

CREATE TABLE likes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT,
  id_tutorial INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  FOREIGN KEY (id_tutorial) REFERENCES tutoriales(id)
);

CREATE TABLE cursos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  descripcion TEXT
);
```

## Instalar dependencias y correr el proyecto en modo desarrollo
```
npm install

npm run dev

```

Luego de esto, comprobar los endpoints que necesitan peticiones a la base de datos y comprobar que funcione correctamente
## Peticiones para el SEED en postman

Aquí se encuentra el json de las peticiones de postman para importarlo

```
{
	"info": {
		"_postman_id": "adf25258-536c-4f67-a81d-e2c895a7a350",
		"name": "GuitarCoach",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "28294845"
	},
	"item": [
		{
			"name": "Seed Usuarios",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/seed-usuarios",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"seed-usuarios"
					]
				}
			},
			"response": []
		},
		{
			"name": "prueba-conexion",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/test-db",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"test-db"
					]
				}
			},
			"response": []
		},
		{
			"name": "Seed tutoriales",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/api/seed-tutoriales",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"seed-tutoriales"
					]
				}
			},
			"response": []
		},
		{
			"name": "Crear Tutorial",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tutoriales/create",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tutoriales",
						"create"
					]
				}
			},
			"response": []
		},
		{
			"name": "Read Tutoriales",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tutoriales/tutoriales",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tutoriales",
						"tutoriales"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Tutoriales",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tutoriales/update",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tutoriales",
						"update"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Tutoriales",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/tutoriales/delete",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"tutoriales",
						"delete"
					]
				}
			},
			"response": []
		}
	]
}
```