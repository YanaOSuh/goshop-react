import { configureStore } from '@reduxjs/toolkit';
import clothing from './clothingSlice';
import cart from './cartSlice';
import wishlist from './wishlistSlice';

export default configureStore({
    reducer: {
        clothing,
        cart,
        wishlist
    },
});