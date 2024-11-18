import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'El ID del tutorial es obligatorio' });
    }

    try {
      const query = 'DELETE FROM tutoriales WHERE id = ?';
      await db.query(query, [id]);
      res.status(200).json({ message: 'Tutorial eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el tutorial' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
