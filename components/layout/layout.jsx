import Head from "next/head"
import styles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Mari &amp; Ari</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Casamento Mariana e Archimedes" />
                <meta name="theme-color" content="#ffffff" />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
            </Head>
            <div className={styles.mainContainer}>
                {children}
            </div>
        </>
    );
};

export default Layout;
