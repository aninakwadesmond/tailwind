import { createSlice } from "@reduxjs/toolkit";

const initialState = { screen: 0, menu: false };
const Studio = createSlice({
  name: "studio",
  initialState,

  reducers: {
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
    setMemu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { setScreen, setMemu } = Studio.actions;
export default Studio.reducer;
