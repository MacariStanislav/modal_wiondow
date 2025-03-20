"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  openModalWindow,
  closeModalWindow,
} from "@/lib/features/modal/modalSlice";
import { Button } from "@mui/material";
import ModalComponentWithClose from "./ModalWindow";
import { NewBox } from "./helper/ModalStyle";
import {Description,Title} from './helper/Description'

const SomeComponent = () => {
  const dispatch = useDispatch();
  const { isOpen, title, description } = useSelector(
    (state) => state.modal
  );

  const openSecondModal = () => {
    dispatch(
      openModalWindow({
        title: Title,
        description:Description,
       
      })
    );
  };

  return (
    <NewBox>
      <Button variant="contained" color="secondary" onClick={openSecondModal}>
        modal2
      </Button>

      <ModalComponentWithClose
        open={isOpen}
        handleClose={() => dispatch(closeModalWindow())}
        title={title}
        description={description}
      />
    </NewBox>
  );
};

export default SomeComponent;
