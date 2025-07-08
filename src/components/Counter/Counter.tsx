import styles from './Counter.module.css'
import { useState } from "react";

export default function Counter() {
    const initialValue = 0;
  //   let counter = 0;
  const [counter, setCounter] = useState<number>(initialValue);
  //     tuple ^

  function handlePlus() {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    console.log(counter);
  }

  function handleMinus() {
    setCounter((prev) => prev - 1);
    console.log(counter);
  }

  function handleReset() {
    setCounter(initialValue);
  }

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

// создайте кнопку -1, которая бы уменьшала значение counter на 1
// дополнительно создайте кнопку reset, которая бы сбрасывала значение counter до 0
// добавьте стилизацию
