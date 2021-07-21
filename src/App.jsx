import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Calculator from "./components/Calculator";

function App() {
  const [calcResult, setCalcResult] = useState("");

  const calculate = () => {
    try {
      setCalcResult(eval(calcResult));
    } catch (err) {
      setCalcResult("Syntax Error");
    }
  };

  const input = (btn) => {
    const err = "Syntax Error";

    if (btn === "=") calculate();
    else if (btn === "C") setCalcResult("");
    else if (btn === "del") {
      try {
        setCalcResult(calcResult.slice(0, -1));
        calcResult === err && setCalcResult("");
      } catch {
        setCalcResult("");
      }
    } else if (calcResult === err) setCalcResult(btn);
    else setCalcResult(calcResult + btn);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Header />
        <Calculator
          setCalcResult={setCalcResult}
          calcResult={calcResult}
          input={input}
        />
      </div>
    </div>
  );
}

export default App;
