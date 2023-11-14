import React from "react";
import BarChart from "@/components/shared/BarChart";
import { Box } from "@mui/material";
import Header from "@/components/shared/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
