import { data } from "../../data/data";
import { removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity } from "../../redux/cartSlice";
import './cart.css';
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {

    const clothes = data.find (item => item.id === cartItem.clothingId);
    const dispatch = useDispatch();

    const addQuantity = () => {
        dispatch(incrementCartItemQuantity({ clothingId: cartItem.clothingId }));
    };
    
    const removeQuantity = () => {
        dispatch(decrementCartItemQuantity({ clothingId: cartItem.clothingId }));
    };

    return(
            <div className="cartItem-info">
                <img 
                    src={clothes.image}
                    alt="clothing item"
                    className="cartItem-image"
                />
                <p className="cartItem-name">{clothes.name}</p>
                <p className="cartItem-quantity">{cartItem.quantity} item(s)</p>
                <p className="cartItem-price">$ {cartItem.totalPrice.toFixed(2)}</p>
                <div className="cartItem-quantityControl">
                    <button className="cartItem-quantityBtn" onClick={removeQuantity}>-</button>
                    <span className="cartItem-addedQuantity">{cartItem.quantity}</span>
                    <button className="cartItem-quantityBtn" onClick={addQuantity}>+</button>
                </div>
                <span className="cartItem-trash" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    height="24" 
                    width="24"
                    >
                    <path 
                        stroke="#232323" 
                        fill="#FCF7F1" 
                        d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12c0 5.9371 4.81294 10.75 10.75 10.75 5.9371 0 10.75 -4.8129 10.75 -10.75 0 -5.93706 -4.8129 -10.75 -10.75 -10.75ZM9.70164 8.64124c-0.29289 -0.29289 -0.76776 -0.29289 -1.06066 0 -0.29289 0.2929 -0.29289 0.76777 0 1.06066L10.9391 12l-2.29812 2.2981c-0.29289 0.2929 -0.29289 0.7678 0 1.0607 0.2929 0.2929 0.76777 0.2929 1.06066 0l2.29806 -2.2981 2.2981 2.2981c0.2929 0.2929 0.7678 0.2929 1.0607 0 0.2929 -0.2929 0.2929 -0.7678 0 -1.0607L13.0604 12l2.2981 -2.2981c0.2929 -0.29289 0.2929 -0.76776 0 -1.06066 -0.2929 -0.29289 -0.7678 -0.29289 -1.0607 0l-2.2981 2.29806 -2.29806 -2.29806Z">
                    </path>
                </svg>
                </span>
            </div>
    )
}

export default CartItem;