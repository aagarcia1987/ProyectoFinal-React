import './CartWidget.css';
import { useContext } from 'react';
import cartContext from '../../context/cartContext';
import { Link } from 'react-router';

export default function CartWidget() {
    const {countItems} = useContext(cartContext);

    return (
        <Link to="/cart" className="cart-link">
        <div className="cart-widget">
        <div className="cart-icon-container">
            <img className="cart-icon" src="./src/assets/carrito.jpg" alt="Carrito" />
            {countItems() > 0 && (
            <span className="cart-bubble">{countItems()}</span>
            )}
        </div>
        </div>
    </Link>
    )
}