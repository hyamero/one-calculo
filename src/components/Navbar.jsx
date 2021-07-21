import { AiOutlineCalculator } from 'react-icons/ai'
import { CgMathPercent } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className='Navbar' >
            <div className="container">
                <AiOutlineCalculator className='icon-calculator' />
            <ul>
                <li>WELCOME</li>
                <li>CALCULO</li>
                <li>CONTACT</li>
            </ul>
                <CgMathPercent className='icon-percent' />
            </div>
        </div>
    )
}

export default Navbar
