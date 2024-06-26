// src/components/StockGold/StockGold.jsx

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchComponents } from "../State/Gold Price/Action";
 // Sửa lại đường dẫn tới file actions.js

const StockGold = () => {
  const dispatch = useDispatch();
  const { components, loading, error } = useSelector((state) => state.gold_price);
  useEffect(() => {
    const componentIds = "1, 3"; // Thay thế bằng danh sách các ID component bạn muốn lấy
  
    dispatch(fetchComponents(componentIds));
  }, [dispatch]);

  // Lấy giờ hiện tại ở Việt Nam (UTC+7)
  const vietnamTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false,
  });

  return (
    <Box className="p-5" sx={{ maxWidth: 400, margin: "0 auto" }}>
      <Typography variant="h4" className="text-blue-1000 py-5" sx={{ textAlign: "center" }}>
        Stock Gold Prices
      </Typography>
      <Typography variant="subtitle1" className="py-3" sx={{ textAlign: "center" }}>
        Current Time in Vietnam: {vietnamTime}
      </Typography>
      <div>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error}</Typography>}
        {components.map((component) => (
          <div key={component.id}>
            <Typography variant="h6" className="py-3">
              {component.name} - Current Price: ${component.price.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="py-3">
              {component.name} - Purchase Price: ${component.pricebuyback.toFixed(2)}
            </Typography>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default StockGold;
