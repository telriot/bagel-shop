import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@app/rootReducer";
import axios from "axios";

export type TProduct = {
	id: string;
	name: string;
	price: number;
	weight: number;
};
type TItemAddedPayload = {
	payload: TProduct | undefined;
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
	reducers: {
		itemAdded: (state: TCartState, action: TItemAddedPayload) => {
			if (!action.payload) return;
			const { byId, allIds } = state.entities.items;
			allIds.push(action.payload.id);
			if (!byId.find((item) => item.id === action.payload?.id)) {
				byId.push(action.payload);
			}
		},
	},
	extraReducers: (builder) => {},
});
export const { itemAdded } = cartSlice.actions;
export const selectCartItemsList = (state: RootState) =>
	state.cart.entities.items.allIds;
export default cartSlice.reducer;
