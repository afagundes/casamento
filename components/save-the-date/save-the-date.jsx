import styles from './save-the-date.module.css'
import Timer from '../timer/timer'

export default function SaveTheDate() {
    const eventDate = '10-07-2022 15:00:00';

    return (
        <section className={styles.saveTheDate}>
            <div className={styles.container}>
                <h2>O Grande Dia<br />10 . Julho . 2022</h2>

                <div className={styles.messageContainer}>
                    <p className={styles.message}>
                        É, meus amigos. Aconteceu. Nós vamos nos casar logo mais.
                    </p>
                    <p className={styles.message}>
                        E como não poderia deixar de ser vamos fazer uma festa bem legal com vários drinks e comida boa pra todo mundo.<br />
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