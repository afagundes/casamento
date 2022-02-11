import { useState } from 'react';
import styles from './verificationForm.module.css'

export default function VerificationForm() {
    const [message, setMessage] = useState('');
    const [hasError, setHasError] = useState(false);

    const verifyCode = async (e) => {
        const verificationCode = e.target.verificationCode.value;

        const response = await fetch('/api/verify', {
            method: 'POST',
            body: verificationCode,
        });

        if (response.ok) {
            window.location.href = "/";
            return;
        }

        if (response.status === 403) {
            const errorMessage = await response.json();
            setMessage(errorMessage.message);
            setHasError(true);

            return;
        }

        if (response.status === 500) {
            setMessage("Ocorreu um erro no servidor.");
            setHasError(true);
        }
    }

    return (
        <main className={styles.verificationForm}>
            <div className={styles.container}>
                <section className={styles.formContainer}>

                    <form onSubmit={(event) => {
                        event.preventDefault();
                        verifyCode(event);
                    }}>
                        <label>
                            Digite abaixo o código que você recebeu
                        </label>
                        
                        <input
                            autoFocus 
                            type='number' 
                            name='verificationCode'
                            pattern='\d*'
                        />

                        {hasError && (
                            <span className={styles.error}>{ message }</span>
                        )}
                        
                        <button type='submit' className={styles.buttonSubmit}>Enviar</button>
                    </form>
                </section>
            </div>
        </main>
    )
}