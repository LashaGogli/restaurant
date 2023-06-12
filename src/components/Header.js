import "../components/Header.css";
import cart from "../photos/cart.png";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";



export default function Header({ countCartItems, scrollTosection, scrollTosection1, scrollTosection2, scrollTosection3 }) {

  const navigate = useNavigate();

 

  return (
    <header>
      <div className="headerDiv">
        <nav>
          <ul>
            <li onClick={() => { navigate("/"); }}>
              HOME
            </li>
            <li onClick={() => { navigate("/menu"); }} >
              <Dropdown>
                <Dropdown.Toggle variant="default" id="menu-dropdown">
                  MENU
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => scrollTosection()}>
                    Main Dishes
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => scrollTosection1()}>
                    Side Dishes
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => scrollTosection2()}>
                    Desserts
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => scrollTosection3()}>
                    Drinks
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={() => { navigate("/contactus"); }}>
              CONTACT US
            </li>
          </ul>
        </nav>
      </div>
      <div className="cartDiv">
        <img onClick={() => { navigate("/cart"); }} className="cart" src={cart} alt="cart" />
        <span>{countCartItems}</span>
      </div>
    </header>
  );
}
