import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { giftList } from '../../lib/gifts';
import BankInfo from '../bank-info/bankInfo';
import GiftCard from './gift-card/giftCard';
import styles from './gifts.module.css';

const sortFunctions = {
    "sortAsc" : (item1, item2) => (item1.price > item2.price) ? 1 : (item1.price == item2.price) ? ((item1.description > item2.description) ? 1 : -1) : -1,
    "sortDesc": (item1, item2) => (item1.price < item2.price) ? 1 : (item1.price == item2.price) ? ((item1.description > item2.description) ? 1 : -1) : -1
};

export default function Gifts({ paymentInfo }) {
    const router = useRouter();
    const scrollRef = useRef();
    const [hasScrolled, setHasScrolled] = useState(false);
    const [sortOrder, setSortOrder] = useState(1);
    const [sortedGiftList, setSortedGiftList] = useState([]);

    const changeOrder = (event) => {
        setSortOrder(Number.parseInt(event.target.value));
    }

    useEffect(() => {
        const sortGiftList = () => {
            const sortFunction = (sortOrder === 1) ? sortFunctions["sortAsc"] : sortFunctions["sortDesc"];
    
            const tempSortedList = [ ...giftList ];
            tempSortedList.sort(sortFunction);
            
            setSortedGiftList(tempSortedList);
        }
    
        const scrollToGiftList = () => {
            if (router.asPath.includes('gift-list') && !hasScrolled) {
                // Remove o #gift-list da url
                window.history.pushState("", "", router.pathname);
    
                scrollRef.current.scrollIntoView();
                setHasScrolled(true);
            }
        }

        sortGiftList();
        scrollToGiftList();
    },[sortOrder, hasScrolled, router.asPath, router.pathname]);

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
                <p>(Claro, essa lista é apenas para se divertirem. Caso queiram nos presentear, fiquem à vontade para escolherem os valores.)</p>
            </article>

            <div className={styles.giftSort} ref={scrollRef}>
                Ordenar por preço:
                
                <form>
                    <span className={styles.priceFormGroup}>
                        <input 
                            type="radio" 
                            name="priceSort" 
                            id="lowPrice"
                            value="1"
                            checked={sortOrder === 1}
                            onChange={changeOrder}
                        />
                        <label htmlFor="lowPrice">Mais baixo</label>
                    </span>
                    <span className={styles.priceFormGroup}>
                        <input 
                            type="radio" 
                            name="priceSort"
                            id="highPrice"
                            value="2"
                            checked={sortOrder === 2}
                            onChange={changeOrder}
                        />
                        <label htmlFor="highPrice">Mais alto</label>
                    </span>
                </form>
            </div>

            <div className={styles.giftGrid}>
                { sortedGiftList.map((gift, index) => <GiftCard key={index} gift={gift} showSubmitButton />) }
            </div>

            <div className={styles.paymentInfo}>
                <p>Caso queiram nos presentear com outro valor que não esteja na lista, esses são nossos dados:</p>
                <p className={styles.pixKey}>Chave PIX (celular): {paymentInfo.pix}</p>
                
                <div className={styles.bankAccount}>
                    <p>Conta Corrente:</p>
                    <BankInfo info={paymentInfo} />
                </div>
            </div>

        </section>
    );
}
