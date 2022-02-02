import styles from './welcome.module.css'

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <div className={styles.container}>
                <h1 className={styles.title}>Save the Date</h1>
                <div className={styles.bannerInfo}>
                    <span>
                        São Bernardo<br />
                        São Paulo
                    </span>
                    <span className={styles.bannerInfoName}>
                        Mariana e Archimedes
                    </span>
                    <span>
                        10 de Julho<br />
                        2022
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
