"use client";

import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ModalAllBox,
  ModalTitle,
  ModalDescription,
  ModalBox,
  CloseStyle,
  ButtonStyled,
} from "./helper/ModalStyle";

const ModalComponentWithClose = ({ open, handleClose, title, description }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <ModalAllBox>
        <ModalTitle>
          {title}
          <CloseStyle onClick={handleClose}>
            <CloseIcon />
          </CloseStyle>
        </ModalTitle>
        <ModalDescription>{description}</ModalDescription>

        <ModalBox>
          <ButtonStyled onClick={handleClose}>btn</ButtonStyled>
        </ModalBox>
      </ModalAllBox>
    </Modal>
  );
};

export default ModalComponentWithClose;
