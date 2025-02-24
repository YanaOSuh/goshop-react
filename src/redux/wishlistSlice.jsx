import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlistItems: []
    },
    reducers: {
        addToWishlist: (state, action) => {
            const wishlistItemExists = state.wishlistItems.some((wishlistItem) => wishlistItem.id === action.payload.id);
            if (!wishlistItemExists) {
                state.wishlistItems.push(action.payload);
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter((wishlistItem) => wishlistItem.id !== action.payload);
        },
    },
});

export const getWishlistCount = state => state.wishlist.wishlistItems.length;

export const getWishlistItems = (state) => state.wishlist.wishlistItems;
export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;

