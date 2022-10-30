import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    insertPokemonToArray: (state, action) => {
      let newArray = state.wishList;
      const pokemon: any = action.payload;
      newArray.push(pokemon);
      state.wishList = newArray;
    },

    removePokemonFromArray: (state, action) => {
      let newArray = state.wishList;
      const pokemon: any = action.payload;
      let index = newArray.findIndex((item) => item.id === pokemon.id);
      newArray.splice(index, 1);
      state.wishList = newArray;
    },
  },
});

export const { insertPokemonToArray, removePokemonFromArray } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
