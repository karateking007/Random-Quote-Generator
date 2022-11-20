import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice.js'

export const store = configureStore({
    reducer: {
        loading: appReducer,
        data: appReducer,
        bgColor: appReducer
    },
})