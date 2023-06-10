
import "../components/Footer.css"
import twiter from '../photos/twiter.png'
import facebook from '../photos/facebook.png'
import tiktok from '../photos/tiktok.png'
export default function Footer() {


    return <footer>
        <div>
            <p className="addressP">Our Address: 17 Kalistrate Kutateladze St, Tbilisi, Georgia
            </p>
        </div>
        <div className="middleDiv">
            <p className="addressP">Opening Hours: From 16:00 to 03:00</p>
            <div className="logoDiv">
                <img className="twiter" src={twiter} alt="twiter"></img>
                <img className="twiter" src={facebook} alt="twiter"></img>
                <img src={tiktok} alt="twiter"></img>
            </div>

        </div>
        <div><p className="addressP">Phone Number: +995 588 345 543</p></div>
    </footer>
}