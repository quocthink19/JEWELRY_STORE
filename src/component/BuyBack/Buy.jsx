import React, { useState } from 'react';
import { Box, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const Buy = () => {
  const [customerName, setCustomerName] = useState('');
  const [reason, setReason] = useState('');
  const [type, setType] = useState('');
  const [goldWeight, setGoldWeight] = useState('');
  const [diamondWeight, setDiamondWeight] = useState('');
  const [goldPrice, setGoldPrice] = useState('');
  const [diamondPrice, setDiamondPrice] = useState('');
  const [calculatedTotal, setCalculatedTotal] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateTotal(goldPrice, diamondPrice);
    const formData = {
      customerName,
      reason,
      type,
      goldWeight,
      diamondWeight,
      goldPrice,
      diamondPrice,
      images,
    };
    console.log(formData);
    resetForm();
  };

  const resetForm = () => {
    setCustomerName('');
    setReason('');
    setType('');
    setGoldWeight('');
    setDiamondWeight('');
    setGoldPrice('');
    setDiamondPrice('');
    setCalculatedTotal('');
    setImages([]);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file) => URL.createObjectURL(file));
    setImages(selectedImages);
  };

  const handleGoldPriceChange = (e) => {
    const price = e.target.value;
    setGoldPrice(price);
  };

  const handleDiamondPriceChange = (e) => {
    const price = e.target.value;
    setDiamondPrice(price);
  };

  const calculateTotal = () => {
    const gold = parseFloat(goldPrice);
    const diamond = parseFloat(diamondPrice);
    if (!isNaN(gold) && !isNaN(diamond)) {
      const total = gold + diamond;
      const totalWithDiscount = total * 0.7;
      setCalculatedTotal(totalWithDiscount.toFixed(2));
    } else if (!isNaN(gold)) {
      setCalculatedTotal((gold * 0.7).toFixed(2));
    } else if (!isNaN(diamond)) {
      setCalculatedTotal((diamond * 0.7).toFixed(2));
    } else {
      setCalculatedTotal('');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      maxWidth="800px"
      mx="auto"
    >
      <Typography variant="h4" gutterBottom>
        Validation
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Reason for Return/Exchange"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                sx={{ color: 'gray' }}
              >
                <MenuItem value="earning">Earning</MenuItem>
                <MenuItem value="ring">Ring</MenuItem>
                <MenuItem value="pendant">Pendant</MenuItem>
                <MenuItem value="shake">Shake</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Diamond Weight"
              value={diamondWeight}
              onChange={(e) => setDiamondWeight(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
            <TextField
              label="Diamond Price"
              value={diamondPrice}
              onChange={handleDiamondPriceChange}
              fullWidth
              variant="outlined"
              margin="normal"
              type="number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Gold Weight"
              value={goldWeight}
              onChange={(e) => setGoldWeight(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Gold Price"
              value={goldPrice}
              onChange={handleGoldPriceChange}
              fullWidth
              variant="outlined"
              margin="normal"
              type="number"
              required
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label" sx={{
              bgcolor: 'green',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'red',
              },
              '&:focus': {
                bgcolor: 'black',
              },
            }}>
              Upload Images
              <input type="file" multiple hidden onChange={handleImageUpload} />
            </Button>
            <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Uploaded ${index + 1}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 8px 8px 0' }}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={calculateTotal} fullWidth sx={{
              bgcolor: 'green',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: 'red',
              },
              '&:focus': {
                bgcolor: 'black',
              },
            }}>
              Định Giá
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Định Giá"
              value={calculatedTotal}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "gray",
                  },
                  "&:hover fieldset": {
                    borderColor: "gray",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "gray",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "gray",
                },
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{
          bgcolor: 'green',
          color: 'white',
          fontWeight: 'bold',
          '&:hover': {
            bgcolor: 'red',
          },
          '&:focus': {
            bgcolor: 'black',
          },
        }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Buy;
