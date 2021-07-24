import CalcResult from "./CalcResult";

import { CgBackspace } from "react-icons/cg";
import { AiOutlineCalculator } from "react-icons/ai";
import { CgMathPercent } from "react-icons/cg";

const Calculator = ({ calcResult, input }) => {
  return (
    <div className="Calculator main-page" id="calculo">
      <div className="calculo-title">
        <AiOutlineCalculator className="icon-calculator" />
        <h2>one calculo</h2>
        <CgMathPercent className="icon-percent" />
      </div>
      <div className="calc-parent container">
        <CalcResult calcResult={calcResult} />
        <div className="calc-buttons">
          <button
            name="/"
            onClick={(e) => input(e.target.name)}
            className="btn-fn"
          >
            ÷
          </button>
          <button
            name="*"
            onClick={(e) => input(e.target.name)}
            className="btn-fn"
          >
            ×
          </button>
          <button
            name="C"
            onClick={(e) => input(e.target.name)}
            className="btn-fn"
          >
            C
          </button>
          <button
            name="del"
            onClick={(e) => input(e.target.name)}
            className="btn-fn"
          >
            <CgBackspace />
          </button>
          <button name="7" onClick={(e) => input(e.target.name)}>
            7
          </button>
          <button name="8" onClick={(e) => input(e.target.name)}>
            8
          </button>
          <button name="9" onClick={(e) => input(e.target.name)}>
            9
          </button>
          <button
            name="-"
            onClick={(e) => input(e.target.name)}
            className="btn-fn"
          >
            {" "}
            -
          </button>
          <button name="4" onClick={(e) => input(e.target.name)}>
            4
          </button>
          <button name="5" onClick={(e) => input(e.target.name)}>
            5
          </button>
          <button name="6" onClick={(e) => input(e.target.name)}>
            6
          </button>
          <button
            name="+"
            onClick={(e) => input(e.target.name)}
            className="btn-fn"
          >
            +
          </button>
          <button name="1" onClick={(e) => input(e.target.name)}>
            1
          </button>
          <button name="2" onClick={(e) => input(e.target.name)}>
            2
          </button>
          <button name="3" onClick={(e) => input(e.target.name)}>
            3
          </button>
          <button
            name="1"
            onClick={(e) => input(e.target.name)}
            className="btn-fn null"
          >
            null
          </button>
          <button
            name="/"
            onClick={(e) => input(e.target.name)}
            className="null"
          >
            null
          </button>
          <button
            name="0"
            onClick={(e) => input(e.target.name)}
            className="zero"
          >
            0
          </button>
          <button name="." onClick={(e) => input(e.target.name)}>
            .
          </button>
          <button
            name="="
            onClick={(e) => input(e.target.name)}
            className="btn-fn equal-sign"
          >
            {" "}
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
