import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    publications: {
        nodes: []
    }
}

// reducers
export const publicationsSlice = createSlice({
    name: 'publications',
    initialState,
    reducers: {
        setPublications: (state, action) => {
            state.publications = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPublications.fulfilled, (state, action) => {
            state.publications = action.payload
        })
        builder.addCase(getPublications.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

// actions
export const {
    setPublications,
    setError,
    setLoading
} = publicationsSlice.actions

export const selectPublications = (state) => state.publications.publications
export const selectPublicationsItems = (state) => state.publications.publications.nodes

export default publicationsSlice.reducer

// api calls
export const getPublications = createAsyncThunk(
    'publications',
    async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/publications`);

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