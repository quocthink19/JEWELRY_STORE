import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const BuyBack = () => {
  const [weight, setWeight] = useState('');
  const [pricePerGram, setPricePerGram] = useState('');
  const [buybackValue, setBuybackValue] = useState(null);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const pricePerGramNum = parseFloat(pricePerGram);
    if (!isNaN(weightNum) && !isNaN(pricePerGramNum)) {
      const value = weightNum * pricePerGramNum * 0.70;
      setBuybackValue(value);
    } else {
      setBuybackValue(null);
    }
  };

  return (
    <Box className="p-5" sx={{ maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h4" className="text-blue-1000 py-5" sx={{ textAlign: 'center' }}>
        Gold BuyBack
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          required
        />
        <TextField
          label="Phone"
          variant="outlined"
          required
        />
        <TextField
          label="Gold Weight (grams)"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <TextField
          label="Price per Gram"
          variant="outlined"
          value={pricePerGram}
          onChange={(e) => setPricePerGram(e.target.value)}
          required
        />
        <Button variant="contained" color="primary"
        onClick={handleCalculate}
        sx={{
          bgcolor: 'green', // Initial background color
          color: 'White', // Text color
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: 'red', // Background color on hover
          },
          '&:focus': {
            bgcolor: 'Black', // Background color on focus
          },
        }}>
          Calculate BuyBack Value
        </Button>
        {buybackValue !== null && (
          <Typography variant="h6" className="text-green-500 py-3" sx={{ textAlign: 'center' }}>
            BuyBack Value: ${buybackValue.toFixed(2)}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default BuyBack;
