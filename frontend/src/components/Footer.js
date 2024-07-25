import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  AccountCircle as AccountIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/favorites");
    } else if (newValue === 2) {
      navigate("/account");
    }
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className="Footer">
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Account" icon={<AccountIcon />} />
    </BottomNavigation>
  );
};

export default Footer;
