import { useState } from "react";
import {Header} from "./components/Header";

function App() {
  const [header, setHeader] = useState('Hello');

  const changeState = () => {
    setHeader("Nguyet");
  }
  return (
    <div class="container mx-auto">
      <Header />
      <h1 class="text-3xl font-bold underline">
        Hello {header}
      </h1>
      <button onClick={changeState}>Click</button>
    </div>
  );
}

export default App;
