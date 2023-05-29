import { Button, Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import axios from "axios";
import { useState } from "react";
import ModalDialog from "./ModalDialog";

const Viewbutton = ({ title, color, col, row, width, click}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);

  return (
    <Box gridColumn={col} gridRow={row} display="flex" justifyContent="center">
      <Button
        variant="contained"
        onClick={click}
        sx={{
          backgroundColor: colors.blueAccent[700],
          boxShadow: "5",
          color: `colors.${color}`,
          fontSize: "14px",
          fontWeight: "bold",
          alignItems: "center",
          width: { width },
          height: "70%",
          maxWidth: "150px",
          margin: "10px",
        }}
      >
        {title}
      </Button>
      {/* <ModalDialog
        open={open}
        handleClose={() => (setOpen(false))}
        title = "Diff"
        style="1200px"
      >
        <Box sx={{ overflow: "auto", background: "" }}>
          <div dangerouslySetInnerHTML={{ __html: diff }}></div> 
        </Box>
      </ModalDialog> */}
    </Box>
  );
};

export default Viewbutton;
