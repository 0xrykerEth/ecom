import './Cart.css'
import { useContext } from 'react';
import { AppContext } from './Context';


const Cart = ({onClose}) => {
    const ctrx = useContext(AppContext);

     const total = ctrx.item.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
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
                            <span>Quantity: {item.quantity} </span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => ctrx.addItem(item)}>+</button>
                            <button onClick={() => ctrx.removeItem(item.id)}>-</button>
                            
                        </li>
                    ))}
                </ul>
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <button onClick={() => ctrx.removeAll()}>Remove All</button>
                </>
            )}
        </div>
        </div>
    )
}

export default Cart;