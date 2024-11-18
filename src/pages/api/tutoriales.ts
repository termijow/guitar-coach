import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const query = 'SELECT * FROM tutoriales';
      const [tutoriales] = await db.query(query);
      res.status(200).json(tutoriales);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los tutoriales' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
};
