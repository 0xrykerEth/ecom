import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="texts">
                <p>Home</p>
                <p>Store</p>
                <p>About</p>
            </div>

            <button className="cart-btn">
                    🛒 Cart
                <span className="cart-count">0</span>
            </button>
        </div>
    )
}

export default Navbar;