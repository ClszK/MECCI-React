import { Dialog, Box, DialogTitle } from "@mui/material";
import React from "react";

const ModalDialog = (props) => {
  const { open, handleClose, children, title, style } = props;
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="90%"
      >
        <Box
          sx={{
            width: style,
            padding: "30px 40px",
            backgroundColor: "#1F2A40",
          }}
        >
          <DialogTitle
            sx={{
              color: "#e0e0e0",
              fontSize: "40px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {title}
          </DialogTitle>
          {children}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ModalDialog;
