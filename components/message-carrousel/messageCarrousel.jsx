import { useState, useEffect, useRef } from 'react';
import styles from './messageCarrousel.module.css';

const messages = [
    {
        id: 1,
        name: "João da silva",
        message: "Estamos muito felizes com o casamento. Desejamos muita sorte aí."
    },
    {
        id: 2,
        name: "Maria de Paula",
        message: "Pô, que dahora. Casaram. Parabéns!"
    },
    {
        id: 3,
        name: "João da silva",
        message: "Estamos muito felizes com o casamento. Desejamos muita sorte aí."
    },
    {
        id: 4,
        name: "Maria de Paula",
        message: "Pô, que dahora. Casaram. Parabéns!"
    }
];

export default function MessageCarrousel() {
    const carrouselRef = useRef();
    const [activeMessage, setActiveMessage] = useState(0);

    useEffect(() => {
        carrouselRef.current.style.transform = `translateX(calc((100vw - 20px) * -${activeMessage}))`;
    }, [activeMessage]);

    return (
        <>
            <section className={styles.messageCarrousel}>
                <div className={`container_gray ${styles.containerCarrousel}`}>
                    <div 
                        className={styles.carrousel}
                        ref={carrouselRef}
                    >
                        {messages.map((message, index) => (
                            <div className={styles.carrouselItem} key={index}>
                                <article className={styles.message}>
                                    <h3>{message.name}</h3>
                                    <p>"{message.message}"</p>
                                </article>
                            </div>    
                        ))}
                    </div>
                </div>    
            </section>
            <div className={styles.carrouselController}>
                {messages.map((_, index) => (
                    <button
                        key={index} 
                        className={`${styles.carrouselButton} 
                                    ${activeMessage === index ? styles.carrouselButtonActive : ''}`}
                        onClick={() => setActiveMessage(index)}                        
                    >
                    </button>
                ))}
            </div>
        </>
    );
}