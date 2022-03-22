import { useState } from 'react';
import { isStringValid } from '../../lib/validation';
import styles from './message.module.css';

export default function Message() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasErrorOnName, setHasErrorOnName] = useState(false);
    const [hasErrorOnMessage, setHasErrorOnMessage] = useState(false);

    const saveMessage = async (event) => {
        const name = event.target.name.value;
        const message = event.target.message.value;

        if (!validateForm(name, message))
            return;

        setIsSubmitting(true);

        const response = await fetch('/api/message', {
            method: 'POST',
            body: JSON.stringify({
                name: name.trim(),
                message: message.trim()
            })
        });

        console.log(response);

        setIsSubmitting(false);
    }

    const validateForm = (name, message) => {
        setHasErrorOnName(false);
        setHasErrorOnMessage(false);

        if (!isStringValid(name)) {
            setHasErrorOnName(true);
        }

        if (!isStringValid(message)) {
            setHasErrorOnMessage(true);
        }

        return hasErrorOnName || hasErrorOnMessage ? false : true;
    }

    return (
        <section className={styles.message}>
            <div className="container">
                <h2>Deixe sua mensagem para nós</h2>

                <div className={styles.formContainer}>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        saveMessage(event);
                    }}>
                        <label htmlFor="name">Seu nome</label>
                        <input type="text" name="name" id="name" />

                        {hasErrorOnName && (
                            <span className="error">Preencha o campo &lsquo;Seu nome&rsquo;</span>
                        )}

                        <label htmlFor="messageArea">Sua mensagem</label>
                        <textarea id="messageArea" name="message"></textarea>

                        {hasErrorOnMessage && (
                            <span className="error">Preencha o campo &lsquo;Sua mensagem&lsquo;</span>
                        )}

                        <button 
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Enviar
                        </button>
                    </form>
                    <div className={styles.formImage} />
                </div>
            </div>
        </section>
    );
}
