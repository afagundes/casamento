import styles from './clothes.module.css';

export default function Clothes() {
    return (
        <section className={styles.clothes}>
            <div className={`${styles.clothes__container} container`}>
                <h2>Sugestão de Trajes</h2>

                <article className={styles.message}>
                    <p>
                        Queremos que nossos convidades se sintam confortáveis.
                    </p>
                    <p>
                        Como nossa cerimônia será intimista, no final da tarde e à noite, 
                        sugerimos o traje <strong>Esporte Fino</strong>.
                    </p>
                </article>

                <article className={`${styles.message} ${styles.clothesInfo}`}>
                    <p>
                        <strong>Para os homens:</strong> Calça e camisa. O uso da gravata e terno é opcional.
                    </p>
                    <p>
                        <strong>Para as mulheres:</strong> Vestidos e saias são ótimas opções. Seja longo ou midi. Como se sentir à vontade.
                    </p>
                    <p>
                        Só aconselhamos saltos baixos e confortáveis.
                    </p>
                </article>
            </div>
        </section>
    );
}
