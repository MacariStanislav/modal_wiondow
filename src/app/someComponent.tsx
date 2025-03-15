"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  openModalWindow,
  closeModalWindow,
} from "@/lib/features/modal/modalSlice";
import { Button, Box } from "@mui/material";
import { ModalComponent, ModalComponentWithClose } from "./ModalWindow";

const SomeComponent = () => {
  const dispatch = useDispatch();
  const { isOpen, title, description, modalType } = useSelector(
    (state) => state.modal
  );

  const openFirstModal = () => {
    dispatch(
      openModalWindow({
        title: "Title",
        description:
          "Description.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget accumsan ligula. Cras dictum rutrum est eu sagittis.",
        modalType: "default",
      })
    );
  };

  const openSecondModal = () => {
    dispatch(
      openModalWindow({
        title: "Title",
        description:
          "Description.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget accumsan ligula. Cras dictum rutrum est eu sagittis. Vestibulum posuere tellus sit amet tellus laoreet tincidunt. Aliquam ullamcorper pulvinar cursus. Vestibulum rhoncus mi et mollis porttitor. Aliquam mollis eros vel fringilla commodo. In quis elit in urna suscipit efficitur.",
        modalType: "withClose",
      })
    );
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="contained" color="primary" onClick={openFirstModal}>
        modal1
      </Button>
      <Button variant="contained" color="secondary" onClick={openSecondModal}>
        modal2
      </Button>

      {modalType === "default" && (
        <ModalComponent
          open={isOpen}
          handleClose={() => dispatch(closeModalWindow())}
          title={title}
          description={description}
        />
      )}
      {modalType === "withClose" && (
        <ModalComponentWithClose
          open={isOpen}
          handleClose={() => dispatch(closeModalWindow())}
          title={title}
          description={description}
        />
      )}
    </Box>
  );
};

export default SomeComponent;
