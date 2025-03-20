"use client";

import { useDispatch } from "react-redux";

import { Button } from "@mui/material";

import ModalComponentWithClose from "./ModalWindow";

import { NewBox } from "../helper/ModalStyle";
import { Description, Title } from "../helper/Description";

import { openModalWindow } from "@/lib/features/modal/modalSlice";

const SomeComponent = () => {
  const dispatch = useDispatch();
  const openSecondModal = () => {
    dispatch(
      openModalWindow({
        title: Title,
        description: Description,
      })
    );
  };

  return (
    <NewBox>
      <Button variant="contained" color="secondary" onClick={openSecondModal}>
        modal2
      </Button>
      <ModalComponentWithClose />
    </NewBox>
  );
};

export default SomeComponent;
