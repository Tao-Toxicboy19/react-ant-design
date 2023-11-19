import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { httpClient } from "../../utils";
import { server } from "../../Constants";

interface Stocks {
    id: number;
    productImage: string;
    productName: string;
    price: number;
    amount: number;
    productTypeId: number;
}

type StocksState = {
    result: Stocks[]
    loading: boolean
    error: boolean
}

const initiaValues: StocksState = {
    result: [],
    loading: false,
    error: false
}


export const stocksAsync = createAsyncThunk(
    'stocks/stocksAsync',
    async () => {
        try {
            const result = await httpClient.get<Stocks[]>(server.PRODUCTS_URL);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
);

const stocksSlice = createSlice({
    name: 'stocks',
    initialState: initiaValues,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(stocksAsync.fulfilled, (state: StocksState, action: PayloadAction<Stocks[]>) => {
            state.result = action.payload;
            state.loading = false;
            state.error = false
        });

        builder.addCase(stocksAsync.rejected, (state: StocksState) => {
            state.result = [];
            state.loading = false;
            state.error = true
        });

        builder.addCase(stocksAsync.pending, (state: StocksState) => {
            state.result = []
            state.loading = true;
            state.error = false
        });
    },
})

export const { } = stocksSlice.actions
export const stocksSelector = (store: RootState) => store.stocksReducer;
export default stocksSlice.reducer;