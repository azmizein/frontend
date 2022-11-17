import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:{
        nim: null,
        username: "",
    }
}

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value.nim = action.payload.nim;
            state.value.username = action.payload.username;
        },
        logout: (state) => {
            state.value.nim = null;
            state.value.username = ""
        }
    }
    
})

export const { login, logout} = userSlice.actions;

export default userSlice.reducer;


