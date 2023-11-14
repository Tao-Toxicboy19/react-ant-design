import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { httpClient } from "../../utils";
import { Carrier } from "../../type/todo.type";

type CarrierState = {
    result: Carrier[]
    loading: boolean
}

const initiaValues: CarrierState = {
    result: [],
    loading: false,
}

export const carrierAsync = createAsyncThunk(
    'todo/TodoAsync',
    async () => {
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    authorization: token
                }
            };
            const result = await httpClient.get<Carrier[]>('http://crane.otpzlab.com:7070/api/carrier');
            return result.data;
        } catch (error) {
            throw error;
        }
    }
);

const carrierSlice = createSlice({
    name: 'carrier',
    initialState: initiaValues,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(carrierAsync.fulfilled, (state: CarrierState, action: PayloadAction<Carrier[]>) => {
            state.result = action.payload;
            state.loading = false;
        });

        builder.addCase(carrierAsync.rejected, (state: CarrierState) => {
            state.result = [];
            state.loading = false;
        });

        builder.addCase(carrierAsync.pending, (state: CarrierState) => {
            state.loading = true;
        });
    },
})

export const { } = carrierSlice.actions
export const carrierSelector = (store: RootState) => store.carrierReducer;
export default carrierSlice.reducer;