import { useState } from "react";
import { cn } from "clsx-for-tailwind";

export default function ToggleCard() {
  const [isBlue, setIsBlue] = useState(true);

  function toggleColor() {
    setIsBlue((prev) => !prev);
  }

  return (
    <div className="p-6 space-y-4">
      <div
        className={cn(
          "h-24 w-48 rounded-x1 shadow-lg flex items-center justify-center text-white font-bold",
          {
            "bg-blue-400": isBlue,
            "bg-yellow-300 text-black": !isBlue,
          }
        )}
      >
        Card
      </div>

      <button
        type="button"
        onClick={toggleColor}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        Toggle Card Color
      </button>
    </div>
  );
}
