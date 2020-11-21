import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@features/cart/cartSlice";
import layoutReducer from "@features/layout/layoutSlice";
const rootReducer = combineReducers({
	cart: cartReducer,
	layout: layoutReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
