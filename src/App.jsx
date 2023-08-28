import { useEffect, useState } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  const increaseNum = () => {
    setCounter(counter + 1);
  } 

  const decreaseNum = () => {
    setCounter(counter - 1);
  } 

  const resetNum = () => {
    setCounter(0);
  } 

  useEffect(()=>{
    const fetchColor = async ()=>{
      const newColor = await getColor();
      setColor(newColor);
    }

    if (counter >= 3) {
      fetchColor();
    }

  });
  return (
    <div>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>Counter:{counter}</span>
      </div>

      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={resetNum}>Reset</button>
    </div>
  );
}
