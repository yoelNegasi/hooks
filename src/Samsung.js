import { useState, useEffect } from "react";

function Samsung(props) {
  const [number, setNumber] = useState(props.number);

  useEffect(() => {
    console.log("Samsung update ");
  });

  return (
    <div className="container">
      <h1>SAMSUNG</h1>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>
        <h1>+</h1>
      </button>
      <button onClick={() => setNumber(number - 1)}>
        <h1>-</h1>
      </button>
      <button onClick={() => setNumber(0)}>
        <h1>reset</h1>
      </button>
    </div>
  );
}

export default Samsung;
