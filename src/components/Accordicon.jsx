import React, { useState } from 'react';

function Accordicon({ data }) {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <div
        className={
          display ? 'flex justify-between bg-purple-600 p-4' : 'flex justify-between border-2 p-4'
        }
        onClick={() => setDisplay((prevState) => !prevState)}>
        <div>{data.Q}</div>
        <div>{display ? '-' : '+'}</div>
      </div>
      <div className={display ? 'block bg-purple-600 bg-opacity-30 p-4' : 'hidden'}>{data.A}</div>
    </div>
  );
}

export default Accordicon;
