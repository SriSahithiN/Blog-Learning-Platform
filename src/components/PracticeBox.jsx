const PracticeBox = ({ task }) => {
  return (
    <div
      style={{
        background: "#f4f4f4",
        padding: "15px",
        borderLeft: "5px solid green",
        marginTop: "20px",
      }}
    >
      <h3>🧪 Practice</h3>
      <p>{task}</p>
    </div>
  );
};

export default PracticeBox;
