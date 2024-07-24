import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type styleSliceType = {
  sideBar: boolean;
};

const initialState: styleSliceType = {
  sideBar: true,
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    SIDEBAR_OPEN: (state, action: PayloadAction<boolean>) => {
      state.sideBar = action.payload;
    },
  },
});

export const { SIDEBAR_OPEN } = styleSlice.actions;

export default styleSlice.reducer;
