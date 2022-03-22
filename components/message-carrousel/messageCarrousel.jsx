import { useState, useEffect, useRef } from 'react';
import styles from './messageCarrousel.module.css';

const messages = [
    {
        id: 1,
        name: "João da silva",
        message: "Estamos muito felizes com o casamento. Desejamos muita sorte aí. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Estamos muito felizes com o casamento. Desejamos muita sorte aí. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
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
        const period = 60000;
        const interval = setInterval(() => {
            setActiveMessage(activeMessage => activeMessage + 1 === messages.length ? 0 : activeMessage + 1);
        }, period);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        const showActiveMessage = () => {
            carrouselRef.current.style.transform = `translateX(calc((100vw - var(--scrollbar-width)) * -${activeMessage}))`;
        }
        showActiveMessage();
    }, [activeMessage]);

    const swipeRight = () => {
        if (activeMessage + 1 === messages.length)
            return;

        setActiveMessage(activeMessage => activeMessage + 1);
    }

    const swipeLeft = () => {
        if (activeMessage === 0)
            return;

        setActiveMessage(activeMessage => activeMessage - 1);
    }

    return (
        <>
            <section className={styles.messageCarrousel}>
                <div className={`container_gray ${styles.containerCarrousel}`}>
                    <div className={styles.carrousel} ref={carrouselRef}>
                        {messages.map((message, index) => (
                            <div 
                                key={index}
                                className={styles.carrouselItem}
                            >
                                <article className={styles.message}>
                                    <h3>{message.name}</h3>
                                    <p>&quot;{message.message}&quot;</p>

                                    <div 
                                        className={`${styles.swipeButton} ${styles.swipeLeft}`}
                                        onClick={() => swipeLeft()}
                                    ></div>
                                    <div 
                                        className={`${styles.swipeButton} ${styles.swipeRight}`}
                                        onClick={() => swipeRight()}
                                    ></div>
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
