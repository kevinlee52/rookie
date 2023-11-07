"use client";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "@/context/theme";

import React from "react";

const Header = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {props.title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
