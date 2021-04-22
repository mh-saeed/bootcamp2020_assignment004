import React, { useState } from "react";
import Message from "./message";
import IsMorning from "./time";
import './counter.css'

function Counter() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? `morning` : ``}`}>
      <IsMorning dayTime={isMorning ? `Morning` : `Night`} />
      <Message counter={count} />
      <button className="button"
        onClick={() => {
          setCount(++count);
        }}
      >
        Update Counter
      </button>

      <button className="button"
        onClick={
          () => {
            setMorning(!isMorning);
          }
        }>Change Background</button>
      <br />
      <button className="button"
        onClick={
          () => {
            setCount(count = 0);
          }
        }>Reset Counter</button>
    </div>

  );
}
export default Counter;
