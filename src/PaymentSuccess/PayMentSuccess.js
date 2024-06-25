import { Button } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { blue } from "@mui/material/colors";

export const PayMentSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className= "min-h-screen px5">
        <div className= "flex flex-col items-center justify-center h-[90vh]">
        <div className= "box w-full lg:w-1/4 flex flex-col items-center rounded-md">
       <CheckCircleIcon sx={{fontSize: "5rem" , color: blue[500]}}/>
        <h1 className= " py-5 text-2x1 font-semibold">SUCCESS</h1>
        <p> Thank You for choosing our Jewelry Store !</p>
        <Button onClick = {Navigate("/")} variant = "contained" className="py-5"
        sx= {{margin:"1rem 0rem"}}> Go To Home</Button>
        </div>
        </div>
        </div>
    )
}