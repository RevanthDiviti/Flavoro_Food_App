import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name:"Categories",
    initialState:{
        category: "All",  //By default it will be All
    },
    reducers:{
        setCategory: (state,action)=>{
            state.category = action.payload;
        }
    }
})

export const {setCategory} = CategorySlice.actions;
export default CategorySlice.reducer;