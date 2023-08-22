import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'right-sidebar',
    initialState: {
        isOpenRightDrawer: false
    },
    reducers: {
        setIsOpenRightDrawer: (state, action: PayloadAction<boolean>) => {
            state.isOpenRightDrawer = action.payload
        }
    }
})

export const { setIsOpenRightDrawer } = slice.actions
export default slice.reducer