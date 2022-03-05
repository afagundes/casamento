import { useRouter } from 'next/router';
import styles from './giftCard.module.css';

export default function GiftCard({ gift }) {
    const router = useRouter();

    return (
        <article className={styles.giftCard}>
            <img alt={gift.description} src={gift.image} />

            <div className={styles.giftInfo}>
                <h4>{gift.description}</h4>

                <div className={styles.price}>
                    <span className={styles.currency}>R$</span> 
                    <span className={styles.priceInt}>{gift.price},</span>
                    <span className={styles.priceDec}>00</span>
                </div>

                <button 
                    type='button' 
                    className={`${styles.buttonSubmit}` }
                    onClick={() => router.push("/gift/[id]", `/gift/${gift.id}`)}
                >
                    Presentear
                </button>
            </div>
        </article>
    )
}