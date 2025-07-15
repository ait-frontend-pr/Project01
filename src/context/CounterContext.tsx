import { createContext } from "react";


interface CounterContextType {
  counter: number;
  handlePlus: () => void;
  handleMinus: () => void;
  handleReset: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);
