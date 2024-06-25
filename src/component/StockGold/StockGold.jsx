import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";

const StockGold = () => {
  const [price, setPrice] = useState(null);
  const [purchasePrice, setPurchasePrice] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        // Replace with your actual backend API endpoint
        const response = await axios.get("https://your-backend-api.com/gold/prices");
        const { price, purchasePrice } = response.data;
        setPrice(price);
        setPurchasePrice(purchasePrice);

        // Get current time in Vietnam (UTC+7)
        const vietnamTime = new Date().toLocaleString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour12: false,
        });
        setCurrentTime(vietnamTime);
      } catch (error) {
        console.error("Error fetching gold prices:", error);
      }
    };

    fetchPrices();

    // Update prices every day at 00:00 Vietnam time (UTC+7)
    const interval = setInterval(() => {
      fetchPrices();
    }, 24 * 60 * 60 * 1000); // 24 hours

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="p-5" sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h4" className="text-blue-1000 py-5" sx={{ textAlign: 'center' }}>
        Stock Gold Prices
      </Typography>
      <Typography variant="subtitle1" className="py-3" sx={{ textAlign: 'center' }}>
        Current Time in Vietnam: {currentTime}
      </Typography>
      <div>
        <Typography variant="h6" className="py-3">
          Current Price: {price !== null ? `$${price.toFixed(2)}` : "Loading..."}
        </Typography>
        <Typography variant="h6" className="py-3">
          Current Purchase Price: {purchasePrice !== null ? `$${purchasePrice.toFixed(2)}` : "Loading..."}
        </Typography>
      </div>
    </Box>
  );
};

export default StockGold;
