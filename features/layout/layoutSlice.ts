import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@app/rootReducer";

type TLayoutState = {
	mobileNavIsOpen: boolean;
	mobileNavIsRendered: boolean;
};
const initialState: TLayoutState = {
	mobileNavIsOpen: false,
	mobileNavIsRendered: false,
};

const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		mobileNavOpened: (state) => {
			state.mobileNavIsOpen = true;
			state.mobileNavIsRendered = true;
		},
		mobileNavDisabled: (state) => {
			state.mobileNavIsRendered = false;
		},
		mobileNavClosed: (state) => {
			state.mobileNavIsOpen = false;
		},
	},
	extraReducers: (builder) => {},
});
export const {
	mobileNavClosed,
	mobileNavDisabled,
	mobileNavOpened,
} = layoutSlice.actions;
export const selectMobileNavIsOpen = (state: RootState) =>
	state.layout.mobileNavIsOpen;
export const selectMobileNavIsRendered = (state: RootState) =>
	state.layout.mobileNavIsRendered;

export default layoutSlice.reducer;
