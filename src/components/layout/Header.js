import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { ReactComponent as Group } from "../../assets/images/Group.svg";
import { ReactComponent as Menu } from "../../assets/images/Menu.svg";
import { ReactComponent as Info } from "../../assets/images/info.svg";

function Header() {
  return (
    <Box gap={"16px"} className="header justify-between">
      <Box gap={"16px"} className="justify-start head">
        <Typography className="mainText justify-start header_heading">
          Payments
        </Typography>
        <Box gap={"6px"} className="flex center">
          <Info />
          <Typography className="mainText justify-start subText">
            How it works
          </Typography>
        </Box>
      </Box>
      <Box className="search_wrap">
        <TextField
          required
          id="outlined-required"
          value=""
          placeholder="Search features, tutorials, etc."
          defaultValue=""
          className="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box gap={"12px"} className="flex group">
        <Box className="group_wrap">
          <Group />
        </Box>
        <Box>
          <Menu />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
