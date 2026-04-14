import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { useEffect } from "react";

const CodeBlock = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
      <button
        onClick={copyCode}
        className="flex items-center gap-2 px-4 py-2 rounded-lg 
bg-blue-600 text-white 
hover:bg-blue-700 
transition"
      >
        Copy
      </button>

      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
