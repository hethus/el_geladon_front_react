import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";

const Header = () => {
  return (<div className="header-container">
    <div >
      <img src={logo} alt="El Geladon logo" />
      <h2>El Geladon</h2>
    </div>
    <img src={checkoutIcon} alt="Sacola de Checkout" />
  </div>)
}

export default Header