import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  title: "",
  description: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalWindow: (state, action) => {
      state.open = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.handleClose =action.payload.handleClose;
    },
    closeModalWindow: (state) => {
      state.open = false;
      state.title = "";
      state.description = "";
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalSlice.actions;
export default modalSlice.reducer;
