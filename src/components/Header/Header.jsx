import './Header.css';
import { FaHome } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";


const Header = () => {

    return <header className='header'>
        <img className='logo' src="../src/assets/Logo.png" alt="AluraFlix" />

        <div className='button-section-pc'>
            <button className='buttonHeader'>Home</button>
            <button className='buttonHeader'>Nuevo video</button>
        </div>

        <div className='button-section-movil'>
            <FaHome color="white" size="2em" />
            <RiAddCircleLine color="white" size="2em" />
        </div>
    </header>
}

export default Header