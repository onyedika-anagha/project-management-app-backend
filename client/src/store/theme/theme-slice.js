import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "light" },
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
