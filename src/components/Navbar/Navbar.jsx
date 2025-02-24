import './navbar.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCartCount } from '../../redux/cartSlice';
import { getWishlistCount } from '../../redux/wishlistSlice';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const closeMobileMenu = () => setMenuOpen(false);

    const cartCount = useSelector(getCartCount);
    const wishlistCount = useSelector(getWishlistCount);

    return(
    <nav className="navbar">
        <div className="logo">
            <Link to="/" className='linkMain'>
                <span className='shopName'>GO</span>SHOP
            </Link>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <li><Link to="/catalog" className='link' onClick={closeMobileMenu}>Catalog</Link></li>
            <li><Link to="/sale" className='link' onClick={closeMobileMenu}>Sale</Link></li>
            <li><Link to="/contact" className='link' onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        <div className="nav-icons">
            <Link to="/wishlist" className='nav-icon'>
                <i className="bi bi-heart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
                </i>
                {wishlistCount > 0 && <span className='nav-badge'>{wishlistCount}</span>}
            </Link>
            <i className="bi bi-person">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
            </i>
            <Link to="/cart" className='nav-icon'>
                <i className="bi bi-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6z"/>
                </svg>
                </i>
                {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
            </Link>
        </div>

        <div className="burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    );
}

export default Navbar;