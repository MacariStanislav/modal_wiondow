import { styled } from "@mui/material/styles";

const ModalAllBox = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  background: "white",
  border: "1px solid none",
  borderRadius: "8px",
  padding: "32px",
  textAlign: "left",
  zIndex: 9999,
});
const ModalBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginTop: "24px",
});
const CloseStyle = styled("span")({
  position: "absolute",
  width: "24px",
  height: "24px",
  color: "#D9D9D9",
  right: "2rem",
  cursor: "pointer",
});

const ModalTitle = styled("div")({
  fontWeight: 700,
  fontSize: "24px",
  fontFamily: "sans-serif",
  lineHeight: "32px",
  color: "#2D60FF",
});
const ModalDescription = styled("div")({
  mt: 2,
  fontWeight: 400,
  fontFamily: "sans-serif",
  fontSize: "20px",
  lineHeight: "24px",
  color: "#000C2F",
});
const ButtonStyled = styled("button")({
  width: "168px",
  height: "40px",
  borderRadius: "4px",
  border: "none",
  background: "#2D60FF",
  padding: "8px",
  cursor: "pointer",
  fontFamily: "sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  color: "white",
  lineHeight: "24px",
  textTransform: "none",
});
const NewBox=styled('div')({
    display: "flex", gap: 2 
})
export {
  ModalAllBox,
  ModalTitle,
  ModalDescription,
  ModalBox,
  CloseStyle,
  ButtonStyled,
  NewBox
};

