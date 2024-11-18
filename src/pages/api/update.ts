import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const { id, titulo, descripcion } = req.body;

    if (!id || !titulo || !descripcion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
      const query = 'UPDATE tutoriales SET titulo = ?, descripcion = ? WHERE id = ?';
      await db.query(query, [titulo, descripcion, id]);
      res.status(200).json({ message: 'Tutorial actualizado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el tutorial' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
