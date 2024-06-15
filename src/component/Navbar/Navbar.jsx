import React from "react";
import { Avatar, Badge, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { blue } from "@mui/material/colors";
import {Person} from "@mui/icons-material";
import "./Navbar.css";
import { Navigate, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate=useNavigate();
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#0d1c46] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">Jewelry</li>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ color: "white", fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          {false?<Avatar sx={{ bgcolor: "white", color: "blue" }}>C</Avatar>:
          <IconButton onClick={()=>navigate("/account/login")} sx={{ color: 'white' }}>
            <Person/>
            </IconButton>}
        </div>
        <div className="">
          <IconButton>
            <Badge
              badgeContent={3}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: blue[800], // Badge background color
                  color: "white", // Badge text color
                },
              }}
            >
              <ShoppingCartIcon sx={{ color: "white", fontSize: "1.5rem" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </Box>
  );
}
