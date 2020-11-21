import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type TProduct = {
	id: string;
	name: string;
	price: number;
	weight: number;
};
type TCartState = {
	popupIsVisible: boolean;
	entities: {
		items: { byId: Array<TProduct>; allIds: Array<string> };
	};
};
const initialState: TCartState = {
	popupIsVisible: false,
	entities: {
		items: { byId: [], allIds: [] },
	},
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});
export const {} = cartSlice.actions;

export default cartSlice.reducer;
