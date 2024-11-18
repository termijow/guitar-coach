import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db'; // Importa la conexión a la base de datos

// Lista de usuarios a insertar
const usuarios = [
  { nombre: 'Juan Pérez', correo: 'juan.perez@example.com' },
  { nombre: 'María González', correo: 'maria.gonzalez@example.com' },
  { nombre: 'Carlos Sánchez', correo: 'carlos.sanchez@example.com' },
  { nombre: 'Ana López', correo: 'ana.lopez@example.com' },
  { nombre: 'Luis Rodríguez', correo: 'luis.rodriguez@example.com' },
  { nombre: 'Laura Martínez', correo: 'laura.martinez@example.com' },
  { nombre: 'David García', correo: 'david.garcia@example.com' },
  { nombre: 'Marta Fernández', correo: 'marta.fernandez@example.com' },
  { nombre: 'José Ramírez', correo: 'jose.ramirez@example.com' },
  { nombre: 'Elena Díaz', correo: 'elena.diaz@example.com' },
];

// Función para insertar los usuarios en la base de datos
const seedUsuarios = async () => {
  try {
    for (const usuario of usuarios) {
      const { nombre, correo } = usuario;
      const query = 'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)';
      await db.query(query, [nombre, correo]);
    }
    return 'Usuarios insertados correctamente';
  } catch (error) {
    console.error('Error al insertar usuarios:', error);
    throw new Error('Error al insertar usuarios');
  }
};

// Endpoint para ejecutar el seed
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const message = await seedUsuarios();
      res.status(200).json({ message });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
