import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const BuyBack = () => {
  return (
    <div>
      <h1>Choose an Option:</h1>
      <ul>
        <li>
          <Link to="/valuation/in">  Store's Jewekey </Link>
        </li>
        <li>
          <Link to="/valuation/out">  Other store's jewelry </Link>
        </li>
      </ul>
    </div>
  );
};

export default BuyBack;
  
