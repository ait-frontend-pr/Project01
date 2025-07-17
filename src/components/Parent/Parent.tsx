import { cn } from "clsx-for-tailwind";
import { useCallback, useMemo, useState } from "react";
import Frederika from "./Frederika";
import AptonKid from "./AptonKid";

function getBall() {
  return { title: "Ball" };
}

export const Parent = () => {
  console.log("Parent rendered");

  const [isBlue, setIsBlue] = useState(false);

  const [counter, setCounter] = useState(0);

  const ball = useMemo(getBall, []);

  const paintGiraffe = useCallback(() => {
    console.log(`Picture if giraffe ${isBlue}`);
  }, [isBlue]);

  return (
    <div className="border bg-amber-200 m-4">
      <h2>Parent</h2>
      <div
        className={cn(
          "min-h-10 w-10 rounded shadow m-4",
          isBlue ? "bg-blue-400" : "bg-yellow-400"
        )}
      ></div>
      <button
        type="button"
        onClick={() => setIsBlue((prev) => !prev)}
        className="border py-2 px-4 m-4 rounded-xl"
      >
        Change box color
      </button>

      <p>Counter: {counter}</p>
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        {" "}
        + 1{" "}
      </button>

      <AptonKid toy={ball} paint={paintGiraffe} />
      <Frederika />
    </div>
  );
};
