import { AiOutlineCalculator } from "react-icons/ai";
import { CgMathPercent } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container">
        <AiOutlineCalculator className="icon-calculator" />
        <CgMathPercent className="icon-percent" />
      </div>
    </div>
  );
};

export default Navbar;
