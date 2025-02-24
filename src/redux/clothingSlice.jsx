import { createSlice } from '@reduxjs/toolkit';

export const clothingSlice = createSlice({
    name: 'clothing',
    initialState: {
        selectedCategory: "ALL"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.clothing.selectedCategory;
export const { filterCategory } = clothingSlice.actions;
export default clothingSlice.reducer;