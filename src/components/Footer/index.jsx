import './style.css';
import logo from '../../assets/icons/logo.svg';
import githubIcon from '../../assets/icons/github.png';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>El Geladon 2022 - Giovanne</p>
      <img src={logo} alt="Logo El Geladon" />
      <div>
        <a href="https://github.com/hethus" target="_blank" rel="noreferrer" ><img src={githubIcon} alt="Logo Github" /></a>
      </div>
    </div>
  )
}

export default Footer;