import { useState } from "react";
import { data } from "../../data/data";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ChangeQuantity from "./ChangeQuantity";
import { addItemtoCart, removeItemFromCart, getCartItems } from "../../redux/cartSlice";
import { addToWishlist, getWishlistItems, removeFromWishlist } from "../../redux/wishlistSlice";
import './catalogItems.css';

function ClothesItem() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const[quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const elem = data.find((item) => item.id === parseInt(id));

    const wishlistItems = useSelector(getWishlistItems);
    const cartItems = useSelector(getCartItems);

    const isFavorited = wishlistItems.some(wishlistItem => wishlistItem.id === elem.id);
    const isInCart = cartItems.some(cartItem => cartItem.clothingId === elem.id);
                
    const handleFavoriteClick = () => {
        if (isFavorited) {
            dispatch(removeFromWishlist(elem.id));
        } else {
            dispatch(addToWishlist(elem));
        }
    };

    const handleAddToCartClick = () => {
        if(isInCart) {
            const cartItem = cartItems.find(cartItem => cartItem.clothingId === elem.id);
            dispatch(removeItemFromCart({ cartItemId: cartItem.id }));
        }
        else {
            dispatch(addItemtoCart({ elem, quantity }));
        }
    };


        return (
            <section className="aboutProductSection">
                <div className="aboutProductContainer">
                    <div className="aboutProduct-picContainer">
                        <img src={elem.image} alt={elem.name} width="350px" />
                    </div>
                    <div className="aboutProduct-info">
                        <h3>{elem.name}</h3>
                        <h4 className="aboutProductPrice">$ {elem.price}</h4>
                        <p className="aboutProductDescription">{elem.description}</p>
                            
                        <div className="quantity-container">
                            <ChangeQuantity quantity = {quantity} setQuantity={setQuantity} />
                            <div className="heart-icon-wrapper" onClick={handleFavoriteClick} >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill={isFavorited ? "#e08cff" : "none"}
                                    stroke={isFavorited ? "#e08cff" : "currentColor"}
                                    className="bi bi-heart"
                                    viewBox="0 0 30 30" 
                                    height="30" 
                                    width="30"
                                >
                                    <path d="M15 25.624875c-0.22918750000000002 0 -0.45831249999999996 -0.041687499999999995 -0.6875 -0.125 -0.22918750000000002 -0.0833125 -0.4270625 -0.20831249999999998 -0.59375 -0.375l-1.65625 -1.53125c-2.5833125 -2.3958125 -4.8229375 -4.6823125 -6.71875 -6.859375C3.4479187500000004 14.5571875 2.5 12.281125 2.5 9.906125c0 -1.875 0.63020625 -3.4426875 1.890625 -4.703125 1.26041875 -1.2604125 2.8176875 -1.890625 4.671875 -1.890625 1.0625 0 2.1145625 0.2552125 3.15625 0.765625 1.0416875 0.51041875 1.96875 1.3489624999999998 2.78125 2.515625 0.9166874999999999 -1.1666625 1.8645625 -2.00520625 2.84375 -2.515625 0.9791875 -0.5104125 2.0104375 -0.765625 3.09375 -0.765625 1.8541874999999999 0 3.4114375000000003 0.6302125000000001 4.671875 1.890625 1.2604375 1.2604375 1.890625 2.828125 1.890625 4.703125 0 2.375 -0.9479375 4.6510625 -2.84375 6.828125 -1.8958125000000001 2.1770625 -4.1354375 4.4635625 -6.71875 6.859375l-1.65625 1.53125c-0.1666875 0.1666875 -0.3645625 0.2916875 -0.59375 0.375 -0.22918750000000002 0.0833125 -0.45831249999999996 0.125 -0.6875 0.125Z" strokeWidth="1.5"></path>
                                </svg>
                                <span className="tooltip">{isFavorited ? "Remove from wishlist" : "Add to wishlist"}</span>
                            </div>
                        </div>

                        <button 
                            className={`addToCart-btn ${isInCart ? "in-cart" : ""}`}
                            onClick={handleAddToCartClick} 
                        >
                            {isInCart ? "Remove from cart" : "Add to cart"}
                        </button>

                        <button className="goBack-btn" onClick={() => navigate(-1)}>
                            <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                            </svg>
                            Go back
                        </button>
                    </div>
                </div>
            </section>
        );
    }

export default ClothesItem;