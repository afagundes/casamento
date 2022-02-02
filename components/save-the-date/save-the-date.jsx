import styles from './save-the-date.module.css'
import Timer from '../timer/timer'

export default function SaveTheDate() {
    const eventDate = '10-07-2022 15:00:00';

    return (
        <section className={styles.saveTheDate}>
            <div className={styles.container}>
                <h2>O Grande Dia<br />10 . Julho . 2022</h2>
                <p className={styles.message}>
                    Decidimos dizer o nosso &quot;sim&quot; no Jardim Secreto do Sítio São Jorge em São Bernardo do Campo.
                </p>
                
                <div className={styles.timerContainer}>
                    Espera mais um pouco... 

                    <Timer eventDate={eventDate}></Timer>
                    
                    ...para gente curtir a festa!
                </div>
            </div>
        </section>
    )
}