import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slides/userSlide'

export const store = configureStore({
    reducer: {
        user: useReducer
    },
})