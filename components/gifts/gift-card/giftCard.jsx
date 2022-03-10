import Link from 'next/link';
import styles from './giftCard.module.css';

export default function GiftCard({ gift, showSubmitButton }) {
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

                {showSubmitButton && (
                    <Link href={`/gift/${gift.id}`}>
                        <a>
                            <button type='button' className={`${styles.buttonSubmit}`}>
                                Presentear
                            </button>
                        </a>
                    </Link>
                )}
            </div>
        </article>
    )
}