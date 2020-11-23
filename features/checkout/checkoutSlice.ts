import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@app/rootReducer";
import axios from "axios";

type TStatus = "idle" | "pending" | "fulfilled" | "rejected";

type TCheckoutState = {
	checkoutStep: number;
	clientSecret: string;
	status: TStatus;
	error: string;
};
type TCheckoutStepChangedPayload = {
	payload: number;
};
type TClientSecretSetPayload = {
	payload: string;
};
const initialState: TCheckoutState = {
	checkoutStep: 0,
	clientSecret: "",
	status: "idle",
	error: "",
};
export const createPaymentIntent = createAsyncThunk(
	"checkout/createPaymentIntent",
	async (_, { getState }) => {
		console.log("createdIntent");
		return { success: true, clientSecret: "12345" };
		//   const intentObj = {
		// 	products: getState().cart.products,
		//   };
		//   try {
		// 	const response = await axios.post(`/api/stripe/payment_intents`, intentObj);
		// 	return response.data;
		//   } catch (error) {
		// 	console.error(error);
		//   }
	}
);
const checkoutSlice = createSlice({
	name: "checkout",
	initialState,
	reducers: {
		checkoutStepChanged: (
			state: TCheckoutState,
			action: TCheckoutStepChangedPayload
		) => {
			state.checkoutStep = action.payload;
		},
		clientSecretSet: (
			state: TCheckoutState,
			action: TClientSecretSetPayload
		) => {
			state.clientSecret = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createPaymentIntent.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(createPaymentIntent.fulfilled, (state, action) => {
			state.clientSecret = action.payload.clientSecret;
			state.status = "fulfilled";
		});
		builder.addCase(createPaymentIntent.rejected, (state, action) => {
			state.status = "rejected";
			state.error = "Something went wrong with our servers";
		});
	},
});
export const { checkoutStepChanged } = checkoutSlice.actions;
export const selectCheckoutStep = (state: RootState) =>
	state.checkout.checkoutStep;
export default checkoutSlice.reducer;
