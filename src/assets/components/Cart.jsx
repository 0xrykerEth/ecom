import './Cart.css'
import { useContext } from 'react';
import { AppContext } from './Context';


const Cart = ({onClose}) => {
    const ctrx = useContext(AppContext);
     const total = ctrx.item.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    return(
        <div className="overlay">
            <div className="cart">
                <button className="close-btn" onClick={onClose}>
                        X
                </button>
                <h2>Cart</h2>
             {ctrx.item.length === 0 ? (
                <p>Your cart is empty</p>
                ) : (
                    <>
                    <ul>
                        {ctrx.item.map((item) => (
                        <li key={item.id}>
                            <span>{item.title} </span>
                            <span>${item.price.toFixed(2)}</span>
                            <button onClick={() => ctrx.removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                    <h3>Total: ${total.toFixed(2)}</h3>
                </>
            )}
        </div>
        </div>
    )
}

export default Cart;