import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const UserProfile = () => {
  const handleLogout = () => {};
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center justify-center">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        <h1 className="py-5 text-2xl font-semibold">Code With Zosh</h1>
        <p>Email: phatLeThing@gmail.com</p>
        <Button
          variant="contained"
          onClick={handleLogout}
          sx={{
            margin: "2rem 0rem",
            backgroundColor: "#2196f3", // Custom blue color
            "&:hover": {
              backgroundColor: "#1976d2", // Custom blue hover color
            },
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
