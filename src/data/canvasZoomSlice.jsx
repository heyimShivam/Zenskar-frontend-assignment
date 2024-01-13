import { createSlice } from "@reduxjs/toolkit";

const canvasZoomSlice = createSlice({
  name: "canvas zoom slice",
  initialState: {
    zoom: 1,
  },
  reducers: {
    updateZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});

export const { updateZoom } = canvasZoomSlice.actions;

export default canvasZoomSlice.reducer;
