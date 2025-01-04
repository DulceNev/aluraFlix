import './Header.css';
import { FaHome } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
const Header = () => {

    return <header className='header'>
        <img className='logo' src={Logo} alt="AluraFlix" />

        <div className='button-section-pc'>
            <Link to="/" className='buttonHeader'>Home</Link>
            <Link to="/nuevo-video" className='buttonHeader'>Nuevo video</Link>
        </div>

        <div className='button-section-movil'>
            <Link to="/"><FaHome color="white" size="2em" /></Link>

            <Link to="/nuevo-video"><RiAddCircleLine color="white" size="2em" /></Link>

        </div>


    </header>
}

export default Header