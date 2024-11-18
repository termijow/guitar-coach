import { useState } from 'react';
import styles from '@/styles/CreateTutorial.module.css';

export default function CreateTutorial() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [idUsuario, setIdUsuario] = useState(1); // ID predeterminado para pruebas

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, descripcion, id_usuario: idUsuario }),
        });

        const data = await res.json();
        alert(data.message || data.error);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Crear Tutorial</h1>
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className={styles.input}
                />
                <textarea
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>
                    Crear
                </button>
            </form>
        </div>
    );
}
