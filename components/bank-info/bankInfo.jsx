import styles from './bankInfo.module.css';

export default function BankInfo({ info }) {
    return info ? (
        <div className={styles.bankInfo}>
            <span>{info.bankReceiverName}</span>

            <strong>{info.bankName}</strong><br />
            Ag {info.bankAgency}<br />
            Conta {info.bankAccount}<br />
            CPF {info.bankReceiverDocument}<br />
        </div>
    ) : null;
}
