import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DataTable from "react-data-table-component";
import { data } from "../../constant/data.js";
import { ReactComponent as Download } from "../../assets/images/download.svg";
import { ReactComponent as Sort } from "../../assets/images/sort.svg";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const columns = [
  {
    name: "Order ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Order Date",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Order Amount",
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: (
      <>
        Transaction fees <InfoOutlinedIcon style={{ height: 20, width: 20 }} />
      </>
    ),
    selector: (row) => row.fees,
    sortable: true,
  },
];

function Transaction() {
  return (
    <Box className="flex-col" gap={"24px"}>
      <Typography className="overview justify-start">
        Transactions | This Month
      </Typography>
      <Box gap={"12px"} className="flex-col table_wrapper">
        <Box className="justify-between">
          <Box className="data_search">
            <TextField
              required
              id="outlined-required"
              value=""
              placeholder="Search by order ID..."
              defaultValue=""
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              className="search"
            />
          </Box>
          <Box className="flex center options_wrap">
            <Box className="sort_button">
              Sort <Sort />
            </Box>
            <Box className="download_button center">
              <Download />
            </Box>
          </Box>
        </Box>
        <DataTable columns={columns} data={data} pagination />
      </Box>
    </Box>
  );
}

export default Transaction;
