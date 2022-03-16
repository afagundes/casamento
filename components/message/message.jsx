import styles from './message.module.css';

export default function Message() {
    return (
        <section className={styles.message}>
            <div className="container">
                <h2>Deixe sua mensagem para nós</h2>

                <div className={styles.formContainer}>
                    <form>
                        <label htmlFor="name">Seu nome</label>
                        <input type="text" name="name" id="name" />

                        <label htmlFor="messageArea">Sua mensagem</label>
                        <textarea id="messageArea"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                    <div className={styles.formImage} />
                </div>
            </div>
        </section>
    );
}
