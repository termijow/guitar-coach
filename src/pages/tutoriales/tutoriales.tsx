import { useEffect, useState } from 'react';
import styles from '@/styles/Tutoriales.module.css';

type Tutorial = {
    id: number;
    titulo: string;
    descripcion: string;
    id_usuario: number;
};

export default function Tutoriales() {
    const [tutoriales, setTutoriales] = useState<Tutorial[]>([]);

    useEffect(() => {
        fetch('/api/tutoriales')
            .then((res) => res.json())
            .then((data) => setTutoriales(data));
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lista de Tutoriales</h1>
            <ul className={styles.list}>
                {tutoriales.map((tutorial) => (
                    <li key={tutorial.id} className={styles.card}>
                        <h2 className={styles.cardTitle}>{tutorial.titulo}</h2>
                        <p className={styles.cardDescription}>{tutorial.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
