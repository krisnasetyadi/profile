import {configureStore} from '@reduxjs/toolkit'
import rootStore from '@/store/root-store'

export const store = configureStore({
    reducer: {
        rootStore
    }
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch