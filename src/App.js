import React from "react";
import Input from "./Input";
import Chart from "./Chart";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <Input />
      <Chart />
    </div>
  );
}

export default App;
