import { useState, useRef } from "react";
import Home from "./pages/Home";
import GqlList from "./components/GqlList";

function App() {
  const count = useRef(0);
  const [, forceUpdate] = useState(0);

  const handleClick = () => {
    count.current = count.current + 1;
    forceUpdate((prev) => prev + 1);
  };

  return (
    <>
      <Home count={count.current} />
      <button onClick={handleClick}>add</button>
      {count.current}
      <GqlList />
    </>
  );
}

export default App;
