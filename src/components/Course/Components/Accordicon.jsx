import React, { useState } from "react";

function Accordicon() {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div
        className={
          display
            ? "flex justify-between bg-purple-600 p-4"
            : "flex justify-between border-2 p-4"
        }
        onClick={() => setDisplay((prevState) => !prevState)}
      >
        <div>Question</div>
        <div>{display ? "-" : "+"}</div>
      </div>
      <div
        className={display ? "block bg-purple-600 bg-opacity-30 p-4" : "hidden"}
      >
        Answer
      </div>
    </div>
  );
}

export default Accordicon;
