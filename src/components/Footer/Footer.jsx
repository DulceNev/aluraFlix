import './Footer.css';
import Logo from "../../assets/Logo.png";
const Footer = () => {
    return (
        <footer className='footer py-3'>
            <img className='logo-footer ' src={Logo} alt="" />
        </footer>
    )
}

export default Footer;