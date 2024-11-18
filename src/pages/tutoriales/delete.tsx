import { useState } from 'react';
import styles from '@/styles/DeleteTutorial.module.css';

export default function DeleteTutorial() {
    const [id, setId] = useState('');

    const handleDelete = async () => {
        if (!id) {
            alert("Por favor, ingrese un ID válido.");
            return;
        }

        const res = await fetch('/api/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        const data = await res.json();
        alert(data.message || data.error);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <h1 className={styles.title}>Eliminar Tutorial</h1>
                <input
                    type="text"
                    placeholder="ID del Tutorial"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className={styles.input}
                />
                <button 
                    type="button" 
                    className={styles.button} 
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </form>
        </div>
    );
}