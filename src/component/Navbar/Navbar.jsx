import { Avatar, Box, IconButton, Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { auth, cart } = useSelector((store) => store);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    if (auth.user.role === "ROLE_STAFF") {
      navigate("/my-profile");
    } else {
      navigate("/admin/jewelry");
    }
  };

  const handleSaleClick = () => {
    const orderHereSection = document.getElementById("order-here");
    if (orderHereSection) {
      orderHereSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-gradient-to-r from-gray-500 to-yellow-400 lg:px-20 flex justify-between items-center">
     <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
      <img
        onClick={() => navigate("/")}
        src="https://cdn.pnj.io/images/logo/pnj.com.vn.png"
        alt="PNJ Logo"
        className="logo"
        style={{ width: '80px', height: '40px' }} // Adjust these values as needed
      />
    </div>
      <div className="flex items-center justify-center flex-grow lg:space-x-10">
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaleClick}
            sx={{
              color: "Black", // Initial text color
              bgcolor: "transparent", // Initial background color (transparent)
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "Black", // Background color on hover
                color: "White", // Text color on hover
              },
            }}
          >
            Sale
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/buyback")}
            sx={{
              color: "Black", // Initial text color
              bgcolor: "transparent", // Initial background color (transparent)
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "Black", // Background color on hover
                color: "White", // Text color on hover
              },
            }}
          >
            BuyBack
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/stockgold")}
            sx={{
              color: "Black", // Initial text color
              bgcolor: "transparent", // Initial background color (transparent)
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "Black", // Background color on hover
                color: "White", // Text color on hover
              },
            }}
          >
            StockGold
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/guarantee")}
            sx={{
              color: "Black", // Initial text color
              bgcolor: "transparent", // Initial background color (transparent)
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "Black", // Background color on hover
                color: "White", // Text color on hover
              },
            }}
          >
            Guarantee
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
       
      <div style={{ display: 'flex', alignItems: 'center' }}>
      {auth.user ? (
        <Avatar
          onClick={handleAvatarClick}
          sx={{ bgcolor: 'white', color: blue.A400, marginLeft: '-80px', cursor: 'pointer' }} // Adjust marginLeft and other styles as needed
        >
          {auth.user?.fullname[0].toUpperCase()}
        </Avatar>
      ) : (
        <IconButton
          onClick={() => navigate('/account/login')}
          sx={{ color: 'white', marginLeft: '-80px', cursor: 'pointer' }} // Adjust marginLeft and other styles as needed
        >
          <PersonIcon />
        </IconButton>
      )}
    </div>
        <div>
        <IconButton onClick={() => navigate("/cart")}>
        <Badge badgeContent={cart.cart?.items.length} color="secondary">
          <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "black" }} />
        </Badge>
      </IconButton>
        </div>
      </div>
    </Box>
  );
};
