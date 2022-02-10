import styles from './menu.module.css'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <div className={styles.items}>
                <ul>
                    <li>Home</li>
                    <li>O Grande Dia</li>
                    <li>Lista de Presentes</li>
                    <li>Galeria de Fotos</li>
                    <li>Deixe sua Mensagem</li>
                </ul>
            </div>
        </nav>
    )
}