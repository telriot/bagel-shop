import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@features/cart/cartSlice";
import layoutReducer from "@features/layout/layoutSlice";
import checkoutReducer from "@features/checkout/checkoutSlice";

const rootReducer = combineReducers({
	cart: cartReducer,
	checkout: checkoutReducer,
	layout: layoutReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
