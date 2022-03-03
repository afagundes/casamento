import Image from 'next/image';
import styles from './gifts.module.css';

export default function Gifts() {
    const giftList = [
        {
            image: "/images/gifts/champagne.jpg",
            description: "Champagne para brindar o primeiro dia de casados",
            price: 240
        },
        {
            image: "/images/gifts/tequila.jpg",
            description: "Tequila para a noiva entrar calminha na cerimônia",
            price: 200
        },
        {
            image: "/images/gifts/passagem_aerea.jpg",
            description: "Cota para passagem aérea",
            price: 250
        },
    ];

    return (
        <section className={`${styles.gifts} container_gray`}>
            <h2>Lista de Presentes</h2>

            <article className={styles.message}>
                <p>Amigos e familiares,</p>
                <p>Fizemos essa lista como uma sugestão caso vocês queiram nos presentear.</p>
                <p>
                    Como sabem, nossa casa já está pronta. Portanto, ao invés de itens materiais preferimos ser
                    presenteados com momentos.
                </p>
                <p>Optamos por pagamento PIX por ser mais simples, mas fiquem à vontade para nos dar dinheiro de qualquer outra forma 😀</p>
                <p>(Claro, essa lista é apenas para se divertirem. Fiquem à vontade para escolherem os valores.)</p>
            </article>

            <div className={styles.giftGrid}>
                {giftList.map((gift, index) => (

                    <article class={styles.giftCard} key={index}>
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
                            >
                                Presentear
                            </button>
                        </div>
                    </article>

                ))}
            </div>

            { /*<p>Informação do PIX</p> */ }

        </section>
    );
}
