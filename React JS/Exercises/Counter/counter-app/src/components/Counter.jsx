import React, { useEffect, useState, useRef } from 'react';

// CSS
import styles from './counter.module.css';

const Counter = () => {

    const [count, setCount] = useState(0);
    console.log(`${count}`);

    const handleDecrement = () => {
        if (count === 0) {
            alert('Count Will Be Negative');
        }
        else
            setCount(count - 1);
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        console.log(`You clicked either of the buttons`)
    }, [count])

    return (
        <div className={styles.counterContainer}>
            <div className={styles.counter}>
                <button
                    className={styles.decrementBtn}
                    onClick={handleDecrement}
                >-</button>
                <h1><strong>{count}</strong></h1>
                <button
                    className={styles.incrementBtn}
                    onClick={handleIncrement}
                >+</button>
            </div>
        </div>
    )
}

export default Counter
