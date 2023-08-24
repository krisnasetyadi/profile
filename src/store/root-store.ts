import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'right-sidebar',
    initialState: {
        isOpenRightDrawer: false,
        isMobileDimension: false
    },
    reducers: {
        setIsOpenRightDrawer: (state, action: PayloadAction<boolean>) => {
            state.isOpenRightDrawer = action.payload
        },
        setIsMobileDimension: (state, action: PayloadAction<boolean>) => {
            state.isMobileDimension = action.payload
        }
    }
})

export const { setIsOpenRightDrawer, setIsMobileDimension } = slice.actions
export default slice.reducer