import { Avatar, Box, IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import zIndex from "@mui/material/styles/zIndex";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../State/store";

export const Navbar = () => {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth.user.role === "ROLE_STAFF") {
      navigate("/my-profile");
    } else {
      navigate("/admin/jewelry");
    }
  };
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#0d1c46] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li
          onClick={() => navigate("/")}
          className="logo font-semibold text-gray-300 text-2xl"
        >
          Jewelry
        </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ color: "white", fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {auth.user ? (
            <Avatar
              onClick={handleAvatarClick}
              sx={{ bgcolor: "white", color: blue.A400 }}
            >
              {auth.user?.fullname[0].toUpperCase()}
            </Avatar>
          ) : (
            <IconButton onClick={() => navigate("/accout/login")}  sx={{ color: "white" }}>
              <PersonIcon />
            </IconButton>
          )}
        </div>
        <div className="">
          <IconButton>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
        <div></div>
      </div>
    </Box>
  );
};
