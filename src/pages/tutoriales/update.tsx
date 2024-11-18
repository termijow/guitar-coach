import { useState } from 'react';
import styles from '@/styles/UpdateTutorial.module.css';

export default function UpdateTutorial() {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch('/api/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, titulo, descripcion }),
        });

        const data = await res.json();
        alert(data.message || data.error);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Actualizar Tutorial</h1>
                <input
                    type="text"
                    placeholder="ID del Tutorial"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Nuevo Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className={styles.input}
                />
                <textarea
                    placeholder="Nueva Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className={styles.textarea}
                />
                <button type="submit" className={styles.button}>
                    Actualizar
                </button>
            </form>
        </div>
    );
}
