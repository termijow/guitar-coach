import { db } from '@/lib/db';

const tutoriales = [
  { titulo: 'Aprender acordes básicos', descripcion: 'Tutorial para aprender acordes básicos.', id_usuario: 1 },
  { titulo: 'Tocar canciones fáciles', descripcion: 'Canciones simples para principiantes.', id_usuario: 2 },
  { titulo: 'Ritmos populares', descripcion: 'Aprender ritmos de canciones populares.', id_usuario: 3 },
  { titulo: 'Escalas mayores', descripcion: 'Cómo tocar escalas mayores.', id_usuario: 4 },
  { titulo: 'Técnicas de arpegio', descripcion: 'Mejora tu técnica con arpegios.', id_usuario: 5 },
  { titulo: 'Improvisación básica', descripcion: 'Principios básicos de la improvisación.', id_usuario: 6 },
  { titulo: 'Afinación manual', descripcion: 'Aprende a afinar la guitarra sin afinador.', id_usuario: 7 },
  { titulo: 'Cómo cambiar cuerdas', descripcion: 'Guía práctica para cambiar las cuerdas de tu guitarra.', id_usuario: 8 },
  { titulo: 'Fingerstyle para principiantes', descripcion: 'Introducción al fingerstyle.', id_usuario: 9 },
  { titulo: 'Mantenimiento de la guitarra', descripcion: 'Cuidados básicos para tu instrumento.', id_usuario: 10 },
];

const seedTutoriales = async () => {
  try {
    for (const tutorial of tutoriales) {
      const { titulo, descripcion, id_usuario } = tutorial;
      const query = 'INSERT INTO tutoriales (titulo, descripcion, id_usuario) VALUES (?, ?, ?)';
      await db.query(query, [titulo, descripcion, id_usuario]);
    }
    return 'Tutoriales insertados correctamente';
  } catch (error) {
    console.error('Error al insertar tutoriales:', error);
    throw new Error('Error al insertar tutoriales');
  }
};

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message?: string; error?: unknown; }): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    try {
      const result = await seedTutoriales();
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
