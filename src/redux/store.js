import { configureStore } from '@reduxjs/toolkit'

// reducers
import menuReducer from "./slices/menuSlice"
import publicationsReducer from "./slices/publicationsSlice"

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    publications: publicationsReducer
  },
})