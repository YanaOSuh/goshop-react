import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemtoCart:(state, action) => {
            const newItemId = new Date().getTime()
            state.cartItems.push({
                id: newItemId,
                clothingId: action.payload.elem.id,
                quantity: action.payload.quantity,
                clothingPrice: action.payload.elem.price,
                totalPrice: action.payload.quantity * action.payload.elem.price
            })
        },

        removeItemFromCart:(state, action) => {
            state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.cartItemId
            )
        },

        incrementCartItemQuantity: (state, action) => {
            const { clothingId, quantity } = action.payload;
            
            const cartItem = state.cartItems.find(
                (item) => item.clothingId === clothingId
            );
            
            if (cartItem) {
                if (quantity > 1) {
                    cartItem.quantity += quantity;
                } else {
                    cartItem.quantity += 1;
                }
                cartItem.totalPrice = cartItem.quantity * cartItem.clothingPrice;
                }
            },

            decrementCartItemQuantity: (state, action) => {
                const { clothingId } = action.payload;
        
                const cartItem = state.cartItems.find(
                    (item) => item.clothingId === clothingId
                );
        
                if (cartItem && cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    cartItem.totalPrice = cartItem.quantity * cartItem.clothingPrice;
                }
            },

        clearCart:(state) => {
            state.cartItems = [];
        }
    },
});

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total}, 0)
}

export const getCartCount = state => state.cart.cartItems.length;

export const getCartItems = state => state.cart.cartItems;
export const {addItemtoCart, removeItemFromCart, incrementCartItemQuantity, decrementCartItemQuantity, clearCart} = slice.actions;
export default slice.reducer;
