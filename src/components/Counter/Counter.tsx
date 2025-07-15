import { useCounter } from '../../hooks/useCounter';
import styles from './Counter.module.css'

export default function Counter() {
  
  const { counter, handlePlus, handleMinus, handleReset } = useCounter(); 


  return (
    <div className={styles.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={handleMinus}>
        -1
      </button>
      <button type="button" onClick={handlePlus}>
        +1
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}