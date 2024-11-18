import Link from 'next/link';
import styles from './page.module.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Gestión de Tutoriales</h1>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/tutoriales/create" className={styles.menuItem}>
                            Crear Tutorial
                        </Link>
                    </li>
                    <li>
                        <Link href="/tutoriales/tutoriales" className={styles.menuItem}>
                            Ver Tutoriales
                        </Link>
                    </li>
                    <li>
                        <Link href="/tutoriales/delete" className={styles.menuItem}>
                            Eliminar Tutorial
                        </Link>
                    </li>
                    <li>
                        <Link href="/tutoriales/update" className={styles.menuItem}>
                            Actualizar Tutorial
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
