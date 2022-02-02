import styles from './counter.module.css'

const Counter = ( { value, unity } ) => {
  return (
    <div className={styles.counter}>
        <span className={styles.value}>{value}</span>
        <span className={styles.unity}>{unity}</span> 
    </div>
  );
};

export default Counter;
