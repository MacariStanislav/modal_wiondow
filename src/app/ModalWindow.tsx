"use client";
import { useSelector } from "react-redux";
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

const ModalComponentWithClose = ({  handleClose }) => {
  const { isOpen, title, description } = useSelector(
    (state) => state.modal
  );

  return (
    <Modal open={isOpen} onClose={handleClose}>
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
