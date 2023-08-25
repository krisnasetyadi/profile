import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'right-sidebar',
    initialState: {
        isOpenRightDrawer: false,
        isMobileDimension: false,
        currentImageIndex: 0, 
        activeButtonsDetail: 'image'
    },
    reducers: {
        setIsOpenRightDrawer: (state, action: PayloadAction<boolean>) => {
            state.isOpenRightDrawer = action.payload
        },
        setIsMobileDimension: (state, action: PayloadAction<boolean>) => {
            state.isMobileDimension = action.payload
        },
        setCurrentImageIndex: (state, action: PayloadAction<number>) => {
            state.currentImageIndex = action.payload
        },
        setActiveButtonsDetail: (state, action: PayloadAction<string>) => {
            state.activeButtonsDetail = action.payload
        }
    }
})

export const { 
    setIsOpenRightDrawer,
    setIsMobileDimension,
    setCurrentImageIndex, 
    setActiveButtonsDetail 
} = slice.actions

export default slice.reducer