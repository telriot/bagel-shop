import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@app/rootReducer";
import { AppDispatch } from "@app/store";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";
type TAddress = {
	line1: string;
	city: string;
	postal_code: string;
	line2?: string;
	state?: string;
};
export type TOrderInfo = {
	shipping: {
		address: TAddress;
		name: string;
		phone?: string;
	};
	metadata: {
		email?: string;
		items: string;
	};
};
export type TOrderReview = {
	address: TAddress;
	items: Array<string>;
	total: number;
	name: string;
};
export type TOrderReviewPayload = {
	payload: TOrderReview;
};
type TStatus = "idle" | "pending" | "fulfilled" | "rejected";
type TStatusChangedPayload = {
	payload: TStatus;
};
type TCheckoutState = {
	checkoutStep: number;
	clientSecret: string;
	paymentStatus: TStatus;
	orderReview: TOrderReview;
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
	paymentStatus: "idle",
	orderReview: {
		items: [],
		total: 0,
		name: "",
		address: { line1: "", city: "", postal_code: "", line2: "", state: "" },
	},
	status: "idle",
	error: "",
};

export const createPaymentIntent = createAsyncThunk<
	string | undefined,
	TOrderInfo,
	{
		dispatch: AppDispatch;
		state: RootState;
	}
>("checkout/createPaymentIntent", async (orderInfo, thunkAPI) => {
	const clientSecret = thunkAPI.getState().checkout.clientSecret;
	const cookies = parseCookies();
	const products = thunkAPI.getState().cart.entities.items.allIds;

	const parseSecret = (secret: string) =>
		secret ? secret.split("_secret_")[0].toString() : undefined;
	if (
		clientSecret?.length ||
		(cookies.clientSecretBS && cookies.clientSecretBS !== "undefined")
	) {
		try {
			const response = await axios.put(`/api/stripe/payment_intents`, {
				orderInfo,
				products,
				clientSecret: clientSecret.length
					? parseSecret(clientSecret)
					: parseSecret(cookies.clientSecretBS),
			});
			return response.data.clientSecret;
		} catch (error) {
			console.error(error);
		}
	} else {
		try {
			const response = await axios.post(`/api/stripe/payment_intents`, {
				orderInfo,
				products,
			});
			return response.data.clientSecret;
		} catch (error) {
			console.error(error);
		}
	}
});
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
		paymentStatusChanged: (
			state: TCheckoutState,
			action: TStatusChangedPayload
		) => {
			state.paymentStatus = action.payload;
		},
		orderReviewCreated: (
			state: TCheckoutState,
			action: TOrderReviewPayload
		) => {
			state.orderReview = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createPaymentIntent.pending, (state, action) => {
			state.status = "pending";
		});
		builder.addCase(createPaymentIntent.fulfilled, (state, action) => {
			state.clientSecret = action.payload!;
			const cookies = parseCookies();
			if (cookies.clientSecretBS) {
				destroyCookie(null, "clientSecretBS");
			}
			setCookie(null, "clientSecretBS", action.payload || "undefined", {
				maxAge: 12 * 60 * 60,
				path: "/",
			});
			state.status = "fulfilled";
		});
		builder.addCase(createPaymentIntent.rejected, (state, action) => {
			state.status = "rejected";
			state.error = "Something went wrong with our servers";
		});
	},
});
export const {
	checkoutStepChanged,
	clientSecretSet,
	paymentStatusChanged,
	orderReviewCreated,
} = checkoutSlice.actions;
export const selectPaymentStatus = (state: RootState) =>
	state.checkout.paymentStatus;
export const selectCheckoutStep = (state: RootState) =>
	state.checkout.checkoutStep;
export const selectClientSecret = (state: RootState) =>
	state.checkout.clientSecret;
export const selectOrderReview = (state: RootState) =>
	state.checkout.orderReview;
export default checkoutSlice.reducer;
