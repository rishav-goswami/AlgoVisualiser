import { useEffect, useState } from "react";
import "./App.css";
import SortingVisualizer from "./sortingVisualizer/SortingVisualizer";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div className="App">
      <h1>⚡Let's go !🚀</h1>
      <div>{`Window width = ${width}`}</div>
      <div>{`Window height = ${height}`}</div>
      <SortingVisualizer number ={(width-230)/4}/>
    </div>
  );
}

export default App;
