import styles from './bankInfo.module.css';

export default function BankInfo() {
    return (
        <div className={styles.bankInfo}>
            <span>Archimedes Fagundes Junior</span>

            <strong>Nubank</strong><br />
            Ag 0001<br />
            Conta 1196862-4<br />
            CPF 346.568.078-26<br />
        </div>
    );
}
