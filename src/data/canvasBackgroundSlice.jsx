import { createSlice } from "@reduxjs/toolkit";

const canvasBackgroundSlice = createSlice({
  name: "canvas zoom slice",
  initialState: {
    showDotsBackground: false,
  },
  reducers: {
    showDots: (state, action) => {
      state.showDotsBackground = true;
    },
    hideDots: (state, action) => {
      state.showDotsBackground = false;
    },
  },
});

export const { showDots, hideDots } = canvasBackgroundSlice.actions;

export default canvasBackgroundSlice.reducer;
