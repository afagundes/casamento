import { useState, useEffect, useRef } from 'react';
import Spinner from '../spinner/spinner';
import styles from './messageCarrousel.module.css';

export default function MessageCarrousel() {
    const carrouselRef = useRef();
    const [messages, setMessages] = useState([]);
    const [activeMessage, setActiveMessage] = useState(0);
    const [loadingMessages, setLoadingMessages] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            setLoadingMessages(true);

            const response = await fetch('/api/message');
            const body = await response.json();
    
            if (!response.ok) {
                console.error(body);
                return [];
            }

            setLoadingMessages(false);

            setMessages(body);
        }

        fetchMessages();
    }, []);

    useEffect(() => {
        const showActiveMessage = () => {
            carrouselRef.current.style.transform = `translateX(calc((100vw - var(--scrollbar-width)) * -${activeMessage}))`;
        }

        if (messages.length > 0)
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
            {messages.length > 0 && loadingMessages === false && (
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
                                            <p>&quot;{message.content}&quot;</p>

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
            )}

            {messages.length === 0 && loadingMessages === false && (
                <section className='container_gray'>
                    <p>Ainda não há nenhuma mensagem, mas a sua pode ser a primeira.</p>
                    <p>Escreva uma mensagem para nós no formulário acima 😁</p>
                </section>
            )}

            {loadingMessages && (
                <section className='container_gray'>
                    <Spinner />
                </section>
            )}
        </>
    );
}
