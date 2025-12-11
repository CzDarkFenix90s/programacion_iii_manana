import { useState, useEffect } from "react";

export default function DocumentTitleChanger() {
  const [count, setCount] = useState(0);
  const [inpuut] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Document title count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}