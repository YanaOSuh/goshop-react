import './wishlist.css';
import WishlistItem from './WishlistItem';
import { useSelector } from 'react-redux';
import { getWishlistItems } from '../../redux/wishlistSlice';
import BtnContinueShop from '../BtnContinueShop';

const Wishlist = () => {

    const wishlistItems = useSelector(getWishlistItems);

    return(
        <section className="wishlistSection">
        {wishlistItems.length === 0 ? (
        <div className='wishlist-container'>
            <p className='wishlist-header'>Wishlist</p>
            <i className="bi bi-heart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
            </i>
            <p className='widhlist-text'>No products added to the wishlist</p>
            <BtnContinueShop />
            </div>
        ) : (
            <div>
                <div className="cart-heading">
                    <h3 className="cart-header">Wishlist</h3>
                </div>
                <div className='wishlist-items-container'>
                    {wishlistItems.map((wishlistItem) => <WishlistItem wishlistItem={wishlistItem} key={wishlistItem.id} />)}
                </div>
                <div className='wishlist-btn-wrapper'>
                    <BtnContinueShop />
                </div>
            </div>
        )}
        </section>
    )
}

export default Wishlist;