import styles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.mainContainer}>
            {children}
        </div>
    );
};

export default Layout;
