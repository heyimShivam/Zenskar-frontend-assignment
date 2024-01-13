import { configureStore } from "@reduxjs/toolkit";
import canvasComponentsListSlice from "./canvasComponentSlice";
import canvasZoomSlice from "./canvasZoomSlice";
import canvasBackgroundSlice from "./canvasBackgroundSlice";

const store = configureStore({
  reducer: {
    canvasComponentsList: canvasComponentsListSlice,
    canvasZoom: canvasZoomSlice,
    canvasBackground: canvasBackgroundSlice,
  },
});

export default store;
