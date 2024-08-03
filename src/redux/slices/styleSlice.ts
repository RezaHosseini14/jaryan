import { ThemeEnum } from "@/models/enums/Theme.enum";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type styleSliceType = {
  sideBar: boolean;
  theme: ThemeEnum;
};

const initialState: styleSliceType = {
  sideBar: true,
  theme: ThemeEnum.Light,
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    SIDEBAR_OPEN: (state, action: PayloadAction<boolean>) => {
      state.sideBar = action.payload;
    },
    CHANGE_THEME: (state, action: PayloadAction<any>) => {
      state.theme = action.payload;
    },
  },
});

export const { SIDEBAR_OPEN, CHANGE_THEME } = styleSlice.actions;

export default styleSlice.reducer;
