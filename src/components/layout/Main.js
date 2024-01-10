import React from "react";
import Box from "@mui/material/Box";
import Overview from "../pages/Overview";
import Transaction from "../pages/Transaction";

function Main() {
  return (
    <Box gap={"32px"} className="flex-col main_layput">
      <Overview />
      <Transaction />
    </Box>
  );
}

export default Main;
