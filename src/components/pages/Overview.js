import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Overview() {
  return (
    <Box className="flex-col" gap={"24px"}>
      <Box className="flex center justify-between">
        <Typography className="overview justify-start">Overview</Typography>
        <Box className="flex month_dropdown">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={"Last Month"}
            defaultValue="Last Month"
            label="Month"
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value={"Last Month"}>Last Month</MenuItem>
            <MenuItem value={"Current Month"}>Current Month</MenuItem>
          </Select>
        </Box>
      </Box>
      <Grid container spacing={"20px"}>
        <Grid md={6} lg={6} item gap={"20px"}>
          <Box className="grid_data flex-col justify-start">
            <Typography className="overview_data_heading">
              Online orders
            </Typography>
            <Box className="overview_data_text">231</Box>
          </Box>
        </Grid>
        <Grid md={6} lg={6} item gap={"20px"}>
          <Box className="grid_data flex-col justify-start">
            <Typography className="overview_data_heading">
              Amount received
            </Typography>
            <Box className="overview_data_text">₹23,92,312.19</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Overview;
