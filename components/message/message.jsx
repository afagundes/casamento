import { useState } from 'react';
import { toast } from 'react-toastify';
import { isStringValid } from '../../lib/validation';
import Spinner from '../spinner/spinner';

import styles from './message.module.css';

export default function Message({ addMessageCallback }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasErrorOnName, setHasErrorOnName] = useState(false);
    const [hasErrorOnMessage, setHasErrorOnMessage] = useState(false);

    const saveMessage = async (event) => {
        const nameElem = event.target.name;
        const messageElem = event.target.message;
        const name = nameElem.value;
        const message = messageElem.value;

        if (!validateForm(name, message)) {
            return;
        }

        setIsSubmitting(true);

        const response = await fetch('/api/message', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                name: name.trim(),
                message: message.trim()
            })
        });

        const body = await response.json();

        if (!response.ok) {
            console.error(body);
            toast.error("Não foi possível enviar sua mensagem.");
            setIsSubmitting(false);
            return;
        }

        nameElem.value = "";
        messageElem.value = "";

        addMessageCallback(body);
        toast.success("Sua mensagem foi enviada");
        setIsSubmitting(false);
    }

    const validateForm = (name, message) => {
        let { errorOnName, errorOnMessage } = false;

        if (!isStringValid(name)) {
            errorOnName = true;
        }

        if (!isStringValid(message)) {
            errorOnMessage = true;
        }

        setHasErrorOnName(errorOnName);
        setHasErrorOnMessage(errorOnMessage);

        return errorOnName || errorOnMessage ? false : true;
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
                            className={isSubmitting ? "submitting" : "" }
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <Spinner /> : "Enviar"}
                        </button>
                    </form>
                    <div className={styles.formImage} />
                </div>
            </div>
        </section>
    );
}
