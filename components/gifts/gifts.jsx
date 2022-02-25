import style from './gifts.module.css';

export default function Gifts() {
    return (
        <section className={`${style.gifts} container_gray`}>
            <h2>Lista de Presentes</h2>

            <p>Essa é nossa lista de presentes. blablablablabla</p>

            <div className={style.giftGrid}>

            </div>
        </section>
    );
}
