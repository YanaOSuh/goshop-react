import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice, clearCart } from "../../redux/cartSlice";
import './cart.css';
import BtnContinueShop from "../BtnContinueShop";

const Cart =() => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <section className="cart-section">
            {cartItems.length === 0 ? (
                <div className="cart-emptyContainer">
                    <p className="cart-empty-text">Your cart is empty</p>
                    <BtnContinueShop />
                </div>
            ) : (
                <div>
            <div className="cart-heading">
                <h3 className="cart-header">Shopping cart</h3>
            </div>
            <div>
                {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />)}
            </div>
            <div className="cart-totalContainer">
                <p className="cart-totalPrice">Total amount: $ {totalPrice.toFixed(2)}</p>
                <button className="cart-clearBtn" onClick={handleClearCart}>Clear cart</button>
            </div>
            <div className="cart-buttons">
                <BtnContinueShop />
                <button className="cart-checkoutBtn">Checkout</button>
            </div>
            </div>
        )}
        </section>
    )
}

export default Cart;