import { Dispatch, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { httpClient } from "../../utils";
import { LOGOUT, TOKEN, server } from "../../Constants";
import { FieldValues } from "react-hook-form";

interface Token {
    access_token: string;
}

type loginState = {
    result: Token | null
    loading: boolean
    error: boolean
}

const initiaValues: loginState = {
    result: null,
    loading: false,
    error: false
}


export const loginAsync = createAsyncThunk(
    'login/loginAsync',
    async (data: FieldValues) => {
        try {
            const result = await httpClient.post<Token>(server.LOGIN_URL, data);
            if (result.data) {
                localStorage.setItem(TOKEN, result.data.access_token);
            }
            return result.data;
        } catch (error) {
            throw error;
        }
    }
);

export const restoreLogin = () => async (dispatch: Dispatch) => {
    try {
        const token = localStorage.getItem(TOKEN);
        if (token) {
            dispatch(setTokens({ access_token: token }));
        }
    } catch (error) {
        throw error;
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    try {
        localStorage.removeItem(TOKEN);
        dispatch(setRemoveToken());
        alert(LOGOUT)
    } catch (error) {
        throw error;
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState: initiaValues,
    reducers: {
        setTokens: (state: loginState, action: PayloadAction<Token>) => {
            state.result = action.payload;
        },
        setRemoveToken(state: loginState) {
            state.loading = false
            state.result = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state: loginState, action: PayloadAction<Token>) => {
            state.result = action.payload;
            state.loading = false;
            state.error = false
        });

        builder.addCase(loginAsync.rejected, (state: loginState) => {
            state.result = null;
            state.loading = false;
            state.error = true
        });

        builder.addCase(loginAsync.pending, (state: loginState) => {
            state.result = null
            state.loading = true;
            state.error = false
        });
    },
})

export const { setTokens, setRemoveToken } = loginSlice.actions
export const loginSelector = (store: RootState) => store.loginReducer;
export default loginSlice.reducer;