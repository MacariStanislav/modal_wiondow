import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  title: "",
  description: "",
  modalType: "default",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModalWindow: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.modalType = action.payload.modalType;
      
    },
    closeModalWindow: (state) => {
      state.isOpen = false;
      state.title = "";
      state.description = "";
      state.modalType = "default";
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalSlice.actions;
export default modalSlice.reducer;
