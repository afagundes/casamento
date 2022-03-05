import { useEffect, useState } from 'react';
import GiftCard from './gift-card/giftCard';
import styles from './gifts.module.css';

const giftList = [
    {
        id: 1,
        image: "/images/gifts/champagne.jpg",
        description: "Champagne para brindar o primeiro dia de casados",
        price: 240
    },
    {
        id: 2,
        image: "/images/gifts/tequila.jpg",
        description: "Tequila para a noiva entrar calminha na cerimônia",
        price: 200
    },
    {
        id: 3,
        image: "/images/gifts/passagem_aerea.jpg",
        description: "Cota para passagem aérea",
        price: 250
    },
    {
        id: 4,
        image: "/images/gifts/buquet.jpg",
        description: "Taxa para a noiva não jogar o buquet para a sua namorada",
        price: 100
    },
    {
        id: 5,
        image: "/images/gifts/livros.jpg",
        description: "Livros de receita para o noivo cozinhar",
        price: 200
    },
    {
        id: 6,
        image: "/images/gifts/brinde.jpg",
        description: "Brinde com os noivos",
        price: 150
    },
    {
        id: 7,
        image: "/images/gifts/carro.jpg",
        description: "Cota para locação do carro na lua de mel",
        price: 700
    },
    {
        id: 8,
        image: "/images/gifts/adega.jpg",
        description: "Adega para o noivo gelar os vinhos",
        price: 800
    },
    {
        id: 9,
        image: "/images/gifts/dia_noiva.jpg",
        description: "Cota para dia da noiva",
        price: 150
    },
    {
        id: 10,
        image: "/images/gifts/banheiro_gravata.jpg",
        description: "Passe livre para ir ao banheiro na hora da gravata",
        price: 500
    },
    {
        id: 11,
        image: "/images/gifts/hospedagem.jpg",
        description: "Se hospedar na casa dos noivos por uma noite",
        price: 300
    }
];

const sortFunctions = {
    "sortAsc" : (item1, item2) => (item1.price > item2.price) ? 1 : (item1.price == item2.price) ? ((item1.description > item2.description) ? 1 : -1) : -1,
    "sortDesc": (item1, item2) => (item1.price < item2.price) ? 1 : (item1.price == item2.price) ? ((item1.description > item2.description) ? 1 : -1) : -1
};

export default function Gifts() {
    const [sortOrder, setSortOrder] = useState(1);
    const [sortedGiftList, setSortedGiftList] = useState([]);

    const changeOrder = (event) => {
        setSortOrder(Number.parseInt(event.target.value));
    }

    useEffect(() => {
        const sortFunction = (sortOrder === 1) ? sortFunctions["sortAsc"] : sortFunctions["sortDesc"];

        const tempSortedList = [ ...giftList ];
        tempSortedList.sort(sortFunction);
        
        setSortedGiftList(tempSortedList);

    },[sortOrder]);

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

            <div className={styles.giftSort}>
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
                { sortedGiftList.map((gift, index) => <GiftCard key={index} gift={gift} />) }
            </div>

            { /*<p>Informação do PIX</p> */ }

        </section>
    );
}
