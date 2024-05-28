import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    menu: {
        items: []
    },
    navMenu: []
}

// reducers
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menu = action.payload
        },
        setNavMenu: (state, action) => {
            state.navMenu = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.menu = action.payload
        })
        builder.addCase(getMenu.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

// actions
export const {
    setMenu,
    setNavMenu
} = menuSlice.actions

export const selectMenu = (state) => state.menu.menu
export const selectMenuItems = (state) => state.menu.menu.items
export const selecetNavMenu = (state) => state.menu.navMenu

export default menuSlice.reducer

// api calls
export const getMenu = createAsyncThunk(
    'menu',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/menu/main`);

            return response.data
        } catch (error) {
            // error response
            if (error.response && error.response.data.message) {
                // return rejectWithValue(error.response.data.message)
              } else {
                // return rejectWithValue(error.message)
              }
        }
    } 
)