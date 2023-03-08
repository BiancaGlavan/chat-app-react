import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { IUser } from "../redux/features/authSlice";

interface IPropsUserDropdown {
  user: IUser;
  onLogout: () => void;
}

const UserDropdown = ({ user, onLogout }: IPropsUserDropdown) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, margin: "0 10px" }}>
        <Avatar sx={{ width: 30, height: 30 }} alt="My profile">
          {user.username.slice(0, 1)}
        </Avatar>
      </IconButton>
      <Menu
        sx={{ mt: "40px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box
          className="user-info"
          sx={{ padding: "10px 20px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}
        >
          <Typography variant="subtitle2" textAlign="center" sx={{ textTransform: "uppercase" }}>
            {user.username}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={onLogout}>
          <Typography variant="subtitle2" textAlign="center">
            {"Logout"}
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserDropdown;
