import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./features/pokemons/pokemons";
import wishListReducer from "./features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
    wishlist: wishListReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokemonsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
