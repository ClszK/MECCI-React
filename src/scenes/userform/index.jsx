import React, { useState } from "react";
import {
  Box,
  Card,
  DialogTitle,
  Button,
  useTheme,
  TextField,
  styled,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { tokens} from "../../theme";

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: "15px 1rem",
  marginBottom: "10px",
  width: "90%",
  fontSize: "20px",
  "& .MuiInputBase-root": {
    height: "70px",
    fontSize: "20px",
    color: "#e0e0e0",
  },
  "& .MuiInputLabel-root": {
    fontSize: "19px",
    color: "#94e2cd",
  },
}));

const typeInfralist = [
  {
    value: "Financial",
    label: "Financial",
  },
  {
    value: "Manufacturing",
    label: "Manufacturing",
  },
  {
    value: "Devlopment",
    label: "Devlopment",
  },
  {
    value: "NPP",
    label: "NPP",
  },
];

const imgTypelist = [
  {
    value: "Windows",
    label: "Windows",
  },
  {
    value: "Linux",
    label: "Linux",
  },
  {
    value: "Mac",
    label: "Mac",
  },
];

const UserForm = (props) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [typeOfInfra, setTypeOfInfra] = useState("");
  const [instances, setInstances] = useState("");
  const [routers, setRouters] = useState("");
  const [subnets, setSubnets] = useState("");
  const [imageType, setImageType] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(typeOfInfra, instances, routers, subnets, imageType);
    navigate("/viewcode");
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={handleFormSubmit}
    >
      <StyledTextField
        label="Type of Infra"
        select
        variant="filled"
        required
        value={typeOfInfra}
        onChange={(e) => setTypeOfInfra(e.target.value)}
      >
        {typeInfralist.map((option) => (
          <MenuItem key={option.value} value={option.value || ""}>
            {option.label}
          </MenuItem>
        ))}
      </StyledTextField>
      <StyledTextField
        label="Instances"
        variant="filled"
        required
        value={instances}
        onChange={(e) => setInstances(e.target.value)}
      />
      <StyledTextField
        label="Routers"
        variant="filled"
        required
        value={routers}
        onChange={(e) => setRouters(e.target.value)}
      />
      <StyledTextField
        label="Subnets"
        variant="filled"
        required
        value={subnets}
        onChange={(e) => setSubnets(e.target.value)}
      />
      <StyledTextField
        label="Image Type"
        select
        variant="filled"
        required
        value={imageType}
        onChange={(e) => setImageType(e.target.value)}
      >
        {imgTypelist.map((option) => (
          <MenuItem key={option.value} value={option.value || ""}>
            {option.label}
          </MenuItem>
        ))}
      </StyledTextField>
      <Box display="flex">
        <Button
          variant="outlined"
          color=""
          sx={{ margin: "1rem" }}
          color="error"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{ margin: "1rem" }}
        >
          Generate
        </Button>
      </Box>
    </Box>
  );
};

export default UserForm;
