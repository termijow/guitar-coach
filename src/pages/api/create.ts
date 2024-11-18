import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { titulo, descripcion, id_usuario } = req.body;

    if (!titulo || !descripcion || !id_usuario) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
      const query = 'INSERT INTO tutoriales (titulo, descripcion, id_usuario) VALUES (?, ?, ?)';
      await db.query(query, [titulo, descripcion, id_usuario]);
      res.status(201).json({ message: 'Tutorial creado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el tutorial' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
