import './Header.css';
import { FaHome } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {

    return <header className='header'>
        <img className='logo' src="../src/assets/Logo.png" alt="AluraFlix" />

        <div className='button-section-pc'>
            <Link to="/" className='buttonHeader'>Home</Link>
            <Link to="/nuevo-video" className='buttonHeader'>Nuevo video</Link>
        </div>

        <div className='button-section-movil'>
            <FaHome color="white" size="2em" />
            <RiAddCircleLine color="white" size="2em" />
        </div>


    </header>
}

export default Header