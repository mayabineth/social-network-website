import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Badge, Button, styled } from "@material-ui/core";
import { Mail, Apps, Notifications } from "@mui/icons-material";
function Navbar() {
  const S_ToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const UserBox = styled(Toolbar)(({ theme }) => ({
    display: "none",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: { display: "flex" },
  }));
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <S_ToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <Apps sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, backgroundColor: "#2a9d8f" }}
            src="https://material-ui.com/static/images/avatar/2.jpg"
            alt="ron"
            onClick={() => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox
          sx={{ display: { xs: "block", sm: "none" } }}
          onClick={() => setOpen(true)}
        >
          <Avatar
            sx={{ width: 30, height: 30, backgroundColor: "#2a9d8f" }}
            alt="ron"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          ></Avatar>
        </UserBox>
      </S_ToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
