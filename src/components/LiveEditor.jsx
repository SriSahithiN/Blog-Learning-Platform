import { useState, useEffect } from "react";

const LiveEditor = ({ initialCode, testCases, course, lessonId }) => {
  const [code, setCode] = useState("");

  const [results, setResults] = useState([]);

  const [input, setInput] = useState("");
  const allPassed = results.length && results.every(Boolean);

  const runCode = () => {
    const iframe = document.getElementById("preview");
    const doc = iframe.contentDocument;

    doc.open();
    doc.write(`
      <script>
        window.INPUT = "${input}";
      </script>
      ${code}
    `);
    doc.close();

    setTimeout(() => {
      const output = doc.body.innerText.trim();

      const newResults = testCases.map((test) =>
        output.includes(test.expected),
      );

      setResults(newResults);
    }, 500);
  };

  const runAllTests = () => {
    const iframe = document.getElementById("preview");
    const doc = iframe.contentDocument;

    const resultsArr = [];

    testCases.forEach((test) => {
      doc.open();

      doc.write(`
        <script>
          window.INPUT = "${test.input}";
        </script>
        ${code}
      `);

      doc.close();

      const output = doc.body.innerText.trim();
      resultsArr.push(output.includes(test.expected));
    });

    setResults(resultsArr);
  };

  useEffect(() => {
    const savedCode = localStorage.getItem(`${course}-${lessonId}`);

    if (savedCode) {
      setCode(savedCode);
    } else {
      setCode(initialCode);
    }
  }, [course, lessonId, initialCode]);

  useEffect(() => {
    if (code) {
      localStorage.setItem(`${course}-${lessonId}`, code);
    }
  }, [code, course, lessonId]);

  return (
    <div
      className="bg-gray-900 text-white
    rounded-xl p-4 space-y-3"
    >
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-48 bg-black text-green-400
        p-3 rounded font-mono outline-none 
        sm:h-48 md:h-56 p-3 border rounded-lg font-mono"
      />

      <input
        type="text"
        placeholder="Enter input (e.g. 2 3)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        onClick={runCode}
        className="flex items-center gap-2 px-4 py-2 rounded-lg 
        bg-blue-600 text-white 
        hover:bg-blue-700 
        transition
        border dark:border-gray-700"
      >
        Run with Input
      </button>

      <button
        onClick={runAllTests}
        className="flex items-center gap-2 px-4 py-2 rounded-lg 
        bg-blue-600 text-white 
        hover:bg-blue-700 
        transition
        border dark:border-gray-700"
      >
        Run All Test Cases
      </button>

      <button
        onClick={() => {
          setCode(initialCode);
          localStorage.removeItem(`${course}-${lessonId}`);
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg 
        bg-blue-600 text-white 
        hover:bg-blue-700 
        transition 
        border dark:border-gray-700"
      >
        Reset Code
      </button>

      <iframe
        id="preview"
        className="w-full h-40 bg-white rounded 
        sm:h-48 md:h-56 border rounded"
      />

      {/* Test Case RESULT */}
      <div
        className="bg-white dark:bg-gray-800
      p-4 rounded-lg
      border dark:border-gray-700"
      >
        <h3 className="font-semibold mb-2">Test Results</h3>

        <div className="text-sm text-gray-500">
          Input used: {input || "None"}
        </div>

        {results.map((res, index) => (
          <div
            key={index}
            className={`p-2 rounded mb-1 ${
              res ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {res ? "✅ Passed" : "❌ Failed"} — Test {index + 1}
          </div>
        ))}

        {results.length > 0 && (
          <div
            className={`p-3 rounded ${
              allPassed ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {allPassed
              ? "🎉 All test cases passed!"
              : "⚠️ Some test cases failed"}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveEditor;
