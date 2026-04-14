const courses = {
  html: {
    id: "html",
    title: "HTML",
    lessons: [
      {
        id: "html1",
        title: "Basic HTML",
        code: `<h1>Hello World</h1>`,
        testCases: [{ expected: "Hello World" }, { expected: "Hello World" }],
      },
    ],
  },

  js: {
    id: "js",
    title: "JavaScript",
    lessons: [
      {
        id: "js-intro",
        title: "Introduction",
        description: "JavaScript basics",
        code: `<script>alert("Hello JS")</script>`,
        explanation: "JS runs in browser",
        task: "Show an alert",
      },
      {
        id: "js1",
        title: "Add Numbers",
        code: `
          const nums = window.INPUT.split(" ");
          const result = Number(nums[0]) + Number(nums[1]);
          document.body.innerText = result;
        `,
        testCases: [
          { input: "2 3", expected: "5" },
          { input: "10 5", expected: "15" },
        ],
        hints: [
          "Split the input string using space",
          "Convert values to numbers",
          "Add both numbers",
          "Print result using document.body.innerText",
        ],
      },
    ],
  },
  react: {
    id: "react",
    title: "React",
    lessons: [
      {
        id: "jsx-intro",
        title: "JSX Introduction",
        description: "JSX allows HTML in React",
        code: `<h1>Hello JSX</h1>`,
        explanation: "Compiled to JS",
        task: "Create heading",
      },
    ],
  },
};

export default courses;
