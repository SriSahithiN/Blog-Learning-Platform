const reactLessons = [
  {
    id: "jsx-intro",
    title: "JSX Introduction",
    description: "JSX allows you to write HTML inside JavaScript.",
    code: `const App = () => {
  return <h1>Hello JSX</h1>;
};`,
    explanation: "JSX gets converted into React.createElement.",
    task: "Create a JSX paragraph with your name.",
  },
  {
    id: "components",
    title: "React Components",
    description: "Components are reusable UI blocks.",
    code: `const Header = () => {
  return <h2>Header</h2>;
};`,
    explanation: "Components help split UI into reusable parts.",
    task: "Create a component called Footer.",
  },
];

export default reactLessons;
