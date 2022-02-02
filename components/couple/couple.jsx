import styles from './couple.module.css'
import { FaHeart } from 'react-icons/fa'
import Image from 'next/image';

const Couple = () => {
  return (
    <section className={styles.couple}>
        <div className={styles.container}>
          <h2>Olá!</h2>

          <div className={styles.message}>
            <p>
              Esse é um convite não oficial para nosso casamento.
            </p>
            <p>
              Se você recebeu um link para esse site, saiba que você é uma pessoa muito importante para nós.
            </p>
            <p>
              Seja um familiar que amamos ou um amigo com quem dividimos bons momentos (e provavelmente muita cerveja),{' '}
              tenha certeza que você é muito querido para nós e fazemos questão da sua presença no dia mais legal das nossas vidas.
            </p>
          </div>
          
          <div className={styles.photos}>
              <div className={styles.photoContainer}>
                <Image
                  priority
                  src="/images/noivo.jpeg"
                  width={150}
                  height={150}
                  className={styles.photo}
                  alt="Archimedes, vulgo Ari, vulgo O Noivo"
                />
              </div>

              <FaHeart size={20} />
              
              <div className={styles.photoContainer}>
                <Image
                  priority
                  src="/images/noiva.jpeg"
                  width={150}
                  height={150}
                  className={styles.photo}
                  alt="Mariana, vulgo A Noiva"
                />
              </div>
          </div>
        
        </div>
    </section>
  );
};

export default Couple;
