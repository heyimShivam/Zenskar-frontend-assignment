import { createSlice } from "@reduxjs/toolkit";

const canvasComponentsListSlice = createSlice({
  name: "canvas component",
  initialState: {
    components: [],
  },
  reducers: {
    addComponent: (state, action) => {
      state.components.push(action.payload);
      localStorage.setItem(
        "canvasComponentsList",
        JSON.stringify(state.components)
      );
    },
    updateComponentPosition: (state, action) => {
      if (state.components.length >= action.payload?.componentIndex) {
        state.components[
          action.payload?.componentIndex
        ].dragableDefaultPosition = action.payload?.dragableDefaultPosition;

        localStorage.setItem(
          "canvasComponentsList",
          JSON.stringify(state.components)
        );
      }
    },
    fetchLocalStorageData: (state, action) => {
      const localStorageData = JSON.parse(
        localStorage.getItem("canvasComponentsList")
      );

      if (localStorageData) {
        state.components = localStorageData;
      }
    },
  },
});

export const { addComponent, updateComponentPosition, fetchLocalStorageData } =
  canvasComponentsListSlice.actions;

export default canvasComponentsListSlice.reducer;
