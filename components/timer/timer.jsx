import styles from './timer.module.css'
import Counter from './counter/counter';
import { useEffect, useState } from 'react';

const Timer = ({ eventDate }) => {
    const zero = '00';
    const [days, setDays] = useState(zero);
    const [hours, setHours] = useState(zero);
    const [minutes, setMinutes] = useState(zero);
    const [seconds, setSeconds] = useState(zero);

    let intervalTimer;

    const execTimer = () => {
        const interval = 1000;

        const calcTime = () => {
            const now = new Date();
            const eventTime = new Date(2022, 6, 10, 15, 0, 0, 0);

            const diff = eventTime.getTime() - now.getTime();

            if (diff <= 0) {
                setDays(zero);
                setHours(zero);
                setMinutes(zero);
                setSeconds(zero);

                clearInterval(intervalTimer)

                return;
            }

            const diffDays = parseInt(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
            const diffHours = parseInt(diff / (1000 * 60 * 60) % 24).toString().padStart(2, '0');
            const diffMinutes = parseInt(diff / (1000 * 60) % 60).toString().padStart(2, '0');
            const diffSeconds = parseInt(diff / 1000 % 60).toString().padStart(2, '0');

            setDays(diffDays);
            setHours(diffHours);
            setMinutes(diffMinutes);
            setSeconds(diffSeconds);
        }

        calcTime();
        intervalTimer = setInterval(() => calcTime(), interval)
    }

    useEffect(() => {
        execTimer();
        return () => clearInterval(intervalTimer);
    }, []);

    return (
        <div className={styles.timer}>

            <Counter value={days} unity="DIAS" />
            <Counter value={hours} unity="HORAS" />
            <Counter value={minutes} unity="MINUTOS" />
            <Counter value={seconds} unity="SEGUNDOS" />
            
        </div> 
    );
};

export default Timer;
