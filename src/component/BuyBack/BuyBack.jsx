import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import emailjs from 'emailjs-com';

const BuyBack = () => {
  const [weight, setWeight] = useState('');
  const [pricePerGram, setPricePerGram] = useState('');
  const [buybackValue, setBuybackValue] = useState(null);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const pricePerGramNum = parseFloat(pricePerGram);

    if (!isNaN(weightNum) && !isNaN(pricePerGramNum)) {
      const value = weightNum * pricePerGramNum * 0.70;
      setBuybackValue(value);

      // Generate confirmation code (you can use a random generator library)
      const confirmationCode = generateConfirmationCode(); // Replace with your confirmation code generation logic
      setConfirmationCode(confirmationCode);

      // Send email with confirmation code
      sendConfirmationEmail(confirmationCode);

      // Show confirmation input field
      setShowConfirmation(true);
    } else {
      setBuybackValue(null);
      setShowConfirmation(false); // Hide confirmation input field if calculation fails
    }
  };

  const sendConfirmationEmail = (code) => {
    const templateParams = {
      name: '', // Replace with customer name (if available)
      email: '', // Replace with customer email
      confirmationCode: code, // Send generated confirmation code
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
      });
  };

  const generateConfirmationCode = () => {
    // Replace with your confirmation code generation logic (e.g., random code generator)
    return Math.random().toString(36).substr(2, 6); // Example: generates a 6-character alphanumeric code
  };

  const handlePayment = () => {
    // Handle payment logic here
    console.log('Handling payment...');
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
        {showConfirmation && (
          <TextField
            label="Confirmation Code"
            variant="outlined"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            required
          />
        )}
        <Button variant="contained" color="primary"
          onClick={showConfirmation ? handlePayment : handleCalculate}
          sx={{
            bgcolor: 'green', // Initial background color
            color: 'white', // Text color
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: 'red', // Background color on hover
            },
            '&:focus': {
              bgcolor: 'black', // Background color on focus
            },
          }}>
          {showConfirmation ? 'Pay Now' : 'Calculate BuyBack Value'}
        </Button>
        {buybackValue !== null && !showConfirmation && (
          <Typography variant="h6" className="text-green-500 py-3" sx={{ textAlign: 'center' }}>
            BuyBack Value: ${buybackValue.toFixed(2)}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default BuyBack;
