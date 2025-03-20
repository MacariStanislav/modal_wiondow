"use client";

import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  closeModalWindow,
  
} from "@/lib/features/modal/modalSlice";
import {
  ModalAllBox,
  ModalTitle,
  ModalDescription,
  ModalBox,
  CloseStyle,
  ButtonStyled,
} from "../helper/ModalStyle";
import { useDispatch, useSelector } from "react-redux";

const ModalComponentWithClose = () => {
  const dispatch = useDispatch();
  const { open, title, description } = useSelector(
    (state) => state.modal
  );

  return (
    <Modal open={open} onClose={()=>{dispatch(closeModalWindow())}}>
      <ModalAllBox>
        <ModalTitle>
          {title}
          <CloseStyle onClick={()=>{dispatch(closeModalWindow())}}>
            <CloseIcon />
          </CloseStyle>
        </ModalTitle>
        <ModalDescription>{description}</ModalDescription>

        <ModalBox>
          <ButtonStyled onClick={()=>{dispatch(closeModalWindow())}}>btn</ButtonStyled>
        </ModalBox>
      </ModalAllBox>
    </Modal>
  );
};

export default ModalComponentWithClose;
