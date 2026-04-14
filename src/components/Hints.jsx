import { useState } from "react";

const Hints = ({ hints }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  const showNextHint = () => {
    if (visibleCount < hints.length) {
      setVisibleCount(visibleCount + 1);
    }
  };

  return (
    <div
      className="bg-yellow-50 dark:bg-yellow-900/20 
                    border-l-4 border-yellow-400 
                    p-4 rounded space-y-2"
    >
      <h3 className="font-semibold">💡 Hints</h3>

      {hints.slice(0, visibleCount).map((hint, index) => (
        <p key={index} className="text-sm text-gray-700">
          👉 {hint}
        </p>
      ))}

      {visibleCount < hints.length && (
        <div className="flex gap-2 mt-2">
          <button
            onClick={showNextHint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-blue-600 text-white 
            hover:bg-blue-700 
            transition"
          >
            Show Hint
          </button>

          <button
            onClick={() => setVisibleCount(hints.length)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-blue-600 text-white 
            hover:bg-blue-700 
            transition"
          >
            Show All
          </button>
        </div>
      )}

      {visibleCount === hints.length && (
        <p className="text-green-600 text-sm">All hints revealed</p>
      )}
    </div>
  );
};

export default Hints;
