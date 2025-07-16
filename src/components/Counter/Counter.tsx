import styles from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";

export default function Counter() {
  const { counter, increment, decrement, reset } = useCounter(1);

  return (
    <div className={styles.counterCard}>
      <h2>Counter: {counter}</h2>
      <button type="button" onClick={decrement}>
        -1
      </button>
      <button type="button" onClick={increment}>
        +1
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
