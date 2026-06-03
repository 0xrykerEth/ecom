import "./Navbar.css";
import {useContext} from "react";
import {AppContext} from "./Context";
import Cart from "./Cart";
import { useState } from "react";


const Navbar = () => {
    const ctrx = useContext(AppContext);
    const [showCart,setShowCart] = useState(false);

    const modelHandler = () => {
        setShowCart(!showCart);
    }

    return (
        <>
            {showCart && <Cart onClose={() => setShowCart(false)} />}
            <div className="navbar">
                <div className="texts">
                    <p>Home</p>
                    <p>Store</p>
                    <p>About</p>
            </div>

            <button className="cart-btn" onClick={modelHandler}>
                    🛒 Cart
                    <span className="cart-count">{ctrx.item.length}</span>
                </button>
            </div>
        </>
    )
}

export default Navbar;