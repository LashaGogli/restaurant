import "../components/Header.css";
import cart from "../photos/cart.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="headerDiv">
        <nav>
          <ul>
            <li onClick={() => { navigate("/"); }}>
              HOME
            </li>
            <li onClick={() => { navigate("menu");  }} >
              <Dropdown>
                <Dropdown.Toggle variant="default" id="menu-dropdown">
                  MENU
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { navigate("/menu/option1"); }}>Main Dishes</Dropdown.Item>
                  <Dropdown.Item onClick={() => { navigate("/menu/option2"); }}>Side Dishes</Dropdown.Item>
                  <Dropdown.Item onClick={() => { navigate("/menu/option3"); }}>Desserts</Dropdown.Item>
                  <Dropdown.Item onClick={() => { navigate("/menu/option4"); }}>Drinks</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li onClick={() => { navigate("/contactus");  }}>
              CONTACT US
            </li>
          </ul>
        </nav>
      </div>
      <div className="cartDiv">
        <img onClick={() => { navigate("/cart"); }} className="cart" src={cart} alt="cart" />
        <span>0</span>
      </div>
    </header>
  );
}
