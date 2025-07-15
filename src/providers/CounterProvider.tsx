import { useState, type ReactNode } from "react";
import { CounterContext } from "../context/CounterContext";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter((prev) => prev + 1);
  }

  function handleMinus() {
    setCounter((prev) => prev - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <CounterContext.Provider
      value={{ counter, handlePlus, handleMinus, handleReset }}
    >
      {children}
    </CounterContext.Provider>
  );
};
