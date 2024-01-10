import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import "../../assets/style/sidebar.css";
import CompanyIcon from "../../assets/images/Navbar/companyIcon.png";
import { menuList } from "../../constant/menuList";
import { ReactComponent as DownArrow } from "../../assets/images/downArrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathanme = location?.pathname?.replace(/^\/+/, "");

  const handleNavigation = (link, name) => {
    navigate(`/${link}`, { state: { name: name } });
  };

  return (
    <div>
      <Drawer className="drawer" variant="permanent" anchor="left">
        <Box gap={"12px"} className="flex center company_header">
          <img src={CompanyIcon} alt="" />
          <Box gap={"4px"} className="flex-col justify-start name_wrap">
            <Typography variant="h4" className="company_name">
              Nishyan
            </Typography>
            <Typography variant="h4" className="visit_store">
              Visit store
            </Typography>
          </Box>
          <DownArrow />
        </Box>

        <List className="list_wrap">
          {menuList.map((menu) => (
            <ListItem
              onClick={() => handleNavigation(menu?.link, menu?.name)}
              className={
                pathanme === menu?.link ? "menu_item active" : "menu_item"
              }
              key={menu.id}
            >
              <ListItemIcon>{menu.image}</ListItemIcon>
              <ListItemText>{menu.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;
