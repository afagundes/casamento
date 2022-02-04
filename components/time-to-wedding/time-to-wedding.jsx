import styles from './time-to-wedding.module.css'
import Timer from '../timer/timer'

export default function TimeToWedding() {
    const eventDate = '10-07-2022 15:00:00';

    return (
        <section className={styles.timeToWedding}>
            <div className={styles.container}>
                <h2>O Grande Dia<br />10 . Julho . 2022</h2>

                <div className={styles.messageContainer}>
                    <p className={styles.message}>
                        Em breve vamos celebrar o amor, a amizade e a união do casal mais 
                        apaixonado que vocês já conheceram.
                    </p>
                    <p className={styles.message}>
                        Contamos com a presença de todos.
                    </p>
                </div>
                
                <div className={styles.timerContainer}>
                    Espera mais um pouco... 

                    <Timer eventDate={eventDate}></Timer>
                    
                    ...para gente curtir a festa!
                </div>
            </div>
        </section>
    )
}