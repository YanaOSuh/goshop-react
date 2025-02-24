import { useDispatch, useSelector } from 'react-redux';
import './wishlist.css';
import { addItemtoCart, getCartItems } from '../../redux/cartSlice';
import { removeFromWishlist } from '../../redux/wishlistSlice';
import closeIcon from '../../images/closeIcon.png';


const WishlistItem = ({wishlistItem}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);

    const isInCart = cartItems.some(item => item.clothingId === wishlistItem.id);

    const handleAddToCart = () => {
        if (!isInCart) {
        dispatch(addItemtoCart({ elem: wishlistItem, quantity: 1 })); 
        }
        dispatch(removeFromWishlist(wishlistItem.id ));
    };

    return(
        <div className='wishlistItem-container'>
            <img className='wishlistItem-image' src={wishlistItem.image} alt={wishlistItem.name} />
            <h3 className='wishlistItem-name'>{wishlistItem.name}</h3>
            <p className='wishlistItem-price'>$ {wishlistItem.price}</p>
            <button className='wishlistItem-addBtn' onClick={handleAddToCart}>Add to cart</button>
            <button className='wishlistItem-deleteBtn' onClick={() => dispatch(removeFromWishlist(wishlistItem.id))}>
                <img src={closeIcon} alt='close icon' width='32px' />
            </button>
        </div>
    )
}

export default WishlistItem;