"use client"; 

import React from "react";
import { Box, Modal, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalComponent = ({ open, handleClose, title, description }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 560,
    bgcolor: "white",
    border: "1px solid none",
    borderRadius: "8px",
    padding: "32px",
    textAlign: "center",
    zIndex: 9999,
  };

  const buttonStyleRed = {
    width: "168px",
    height: "40px",
    borderRadius: "4px",
    border: "1.6px solid #EA1700",
    padding: "8px",
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "#EA1700",
    lineHeight: "24px",
    textTransform: "none",
  };

  const buttonStyleBlue = {
    width: "168px",
    height: "40px",
    borderRadius: "4px",
    border: "none",
    bgcolor: "#2D60FF",
    padding: "8px",
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "white",
    lineHeight: "24px",
    textTransform: "none",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: "24px",
            fontFamily: "sans-serif",
            lineHeight: "32px",
            color: "#2D60FF",
          }}
        >
          {title}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            fontWeight: 400,
            fontFamily: "sans-serif",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#000C2F",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <Button sx={buttonStyleRed} onClick={handleClose}>
            btn
          </Button>
          <Button sx={buttonStyleBlue} onClick={handleClose}>
            btn
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const ModalComponentWithClose = ({ open, handleClose, title, description }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 560,
    bgcolor: "white",
    border: "1px solid none",
    borderRadius: "8px",
    padding: "32px",
    textAlign: "left",
    zIndex: 9999,
  };

  const buttonStyleBlue = {
    width: "168px",
    height: "40px",
    borderRadius: "4px",
    border: "none",
    bgcolor: "#2D60FF",
    padding: "8px",
    fontFamily: "sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    color: "white",
    lineHeight: "24px",
    textTransform: "none",
  };

  const closeButtonStyle = {
    position: "absolute",
    width: "24px",
    height: "24px",
    color: "#D9D9D9",
    right: "32px",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: "24px",
            fontFamily: "sans-serif",
            lineHeight: "32px",
            color: "#2D60FF",
          }}
        >
          {title}
          <IconButton sx={closeButtonStyle} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            fontWeight: 400,
            fontFamily: "sans-serif",
            fontSize: "20px",
            lineHeight: "24px",
            color: "#000C2F",
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <Button sx={buttonStyleBlue} onClick={handleClose}>
            btn
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export { ModalComponent, ModalComponentWithClose };
