import "./Navbar.css";
import {useContext} from "react";
import {AppContext} from "./Context";
import AuthContext from "./auth-store";
import Cart from "./Cart";
import { useState } from "react";
import { Link } from "react-router-dom";
import PillNav from "./PillNav";
import logoImg from "../par.png";



const navLinks = [
  { text: "Home Page", path: "/Home" },
  { text: "Store", path: "/Store" },
  { text: "About", path: "/About" },
  { text: "Contact", path: "/Contact" }
];

const Navbar = () => {
    const appCtx = useContext(AppContext);
    const authCtx = useContext(AuthContext);
    const [showCart,setShowCart] = useState(false);

    const modelHandler = () => {
        setShowCart(!showCart);
    }

    return (
        <>
            {showCart && <Cart onClose={() => setShowCart(false)} />}
            <div className="navbar">
                <div className="texts">
                    <PillNav
                        logo={logoImg}
                        logoAlt="Company Logo"
                        items={[
                            { label: 'Home', href: '/Home' },
                            { label: 'About', href: '/About' },
                            { label: 'Store', href: '/Store' },
                            { label: 'Contact', href: '/Contact' },
                            {label : 'Login', href : '/Auth'}
                        ]}
                        activeHref="/"
                        className="custom-nav"
                        ease="power2.easeOut"
                        baseColor="#000000"
                        pillColor="#ffffff"
                        hoveredPillTextColor="#ffffff"
                        pillTextColor="#000000"
                        theme="light"
                        initialLoadAnimation={false}
                        />
                </div>

            <div className="navbar-actions">
                <button className="cart-btn" onClick={modelHandler}>
                    🛒 Cart
                    <span className="cart-count">{appCtx.item.length}</span>
                </button>
                {authCtx.isLoggedIn && (
                    <button className="logout-btn" onClick={authCtx.logOut}>
                        Log Out
                    </button>
                )}
            </div>
        </div>
        </>
    )
}

export default Navbar;