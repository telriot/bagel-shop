import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@app/rootReducer";
import axios from "axios";
import { AlignLeftDimensions } from "@styled-icons/entypo/AlignLeft";

type TItemsById = Array<TProduct>;
type TItemsAllIds = Array<string>;
const getTotal = (byId: TItemsById, allIds: TItemsAllIds) => {
	let total = 0;
	allIds.forEach((id) => {
		const item = byId.find((el) => el.id === id);
		if (item) {
			total += item.price;
		}
	});
	return total;
};

export type TProduct = {
	id: string;
	name: string;
	price: number;
	weight: number;
	img: string;
};
type TItemAddedPayload = {
	payload: TProduct | undefined;
};
type TItemCountChanged = {
	payload: string;
};

type TCartState = {
	popupIsVisible: boolean;
	entities: {
		items: { byId: TItemsById; allIds: TItemsAllIds };
	};
	total: number;
};
const initialState: TCartState = {
	popupIsVisible: false,
	entities: {
		items: { byId: [], allIds: [] },
	},
	total: 0,
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
			state.total = getTotal(byId, allIds);
		},
		itemRemoved: (state: TCartState, action: TItemCountChanged) => {
			if (!action.payload) return;
			const { byId, allIds } = state.entities.items;
			const newArr = byId.filter((el) => el.id !== action.payload);
			state.entities.items.byId = newArr;
			state.total = getTotal(byId, allIds);
		},
		itemCountIncreased: (state: TCartState, action: TItemCountChanged) => {
			const { byId, allIds } = state.entities.items;
			allIds.push(action.payload);
			state.total = getTotal(byId, allIds);
		},
		itemCountDecreased: (state: TCartState, action: TItemCountChanged) => {
			const { byId, allIds } = state.entities.items;
			const itemIndex = allIds.findIndex((el) => el === action.payload);
			itemIndex !== -1 && allIds.splice(itemIndex, 1);
			state.total = getTotal(byId, allIds);
		},
	},
	extraReducers: (builder) => {},
});
export const {
	itemAdded,
	itemRemoved,
	itemCountIncreased,
	itemCountDecreased,
} = cartSlice.actions;
export const selectCartItemsList = (state: RootState) =>
	state.cart.entities.items.allIds;
export const selectCartItemsById = (state: RootState) =>
	state.cart.entities.items.byId;
export const selectCartTotal = (state: RootState) => state.cart.total;
export default cartSlice.reducer;
