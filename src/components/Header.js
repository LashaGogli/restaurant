import "../components/Header.css"
import cart from "../photos/cart.png"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Header() {
    const navigate = useNavigate();
    const [color, setColor] = useState("");
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");

    function changeColor() {
        setColor("#20B2AA");
        setColor1("black");
        setColor2("black");
    }
    function changeColor1() {
        setColor1("#20B2AA");
        setColor("black");
        setColor2("black");
    }
    function changeColor2() {
        setColor2("#20B2AA");
        setColor1("black");
        setColor("black");
    }

    return (
        <header>
            <div className="headerDiv">
                <nav>
                    <ul>
                        <li onClick={() => { navigate('/'); changeColor(); }} style={{ color: color }}>HOME</li>
                        <li onClick={() => { navigate('/menu'); changeColor1(); }} style={{ color: color1 }}>MENU</li>
                        <li onClick={() => { navigate('/contactus'); changeColor2(); }} style={{ color: color2 }}>CONTACT US</li>
                    </ul>
                </nav>
            </div>
            <div className="cartDiv">
                <img className="cart" src={cart} alt="cart"></img>
                <span>0</span>
            </div>
        </header>
    )
}
