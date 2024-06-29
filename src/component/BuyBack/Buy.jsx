import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBuybackPriceOut } from '../State/Valuation/Action';

const Buy = () => {
  const dispatch = useDispatch();
  const { valuation } = useSelector(store => store); // Lấy giá trị valuation từ Redux store
  const [Name, setName] = useState('');
  const [type, setType] = useState('');
  const [goldWeight, setGoldWeight] = useState('');
  const [diamondWeight, setDiamondWeight] = useState('');
  const [components, setComponents] = useState([]);
  const [images, setImages] = useState([]);
  const [buybackPrice, setBuybackPrice] = useState(null);
  const jwt = localStorage.getItem("jwt");

  const handleCalculateBuybackPriceClick = async () => {
    await handleCalculateBuybackPrice();
    handleSetBuybackPrice();
  };

  const handleCalculateBuybackPrice = async () => {
    await dispatch(calculateBuybackPriceOut(goldWeight, diamondWeight, components, jwt));
  };
  
  const handleSetBuybackPrice = () => {
    if (valuation.totalPrice !== undefined) {
      setBuybackPrice(valuation.totalPrice);
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      Name,
      type,
      goldWeight,
      diamondWeight,
      components: components.filter(Boolean),
      images,
    };
    console.log(formData);
  
    await handleCalculateBuybackPrice();
    handleSetBuybackPrice();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file) => URL.createObjectURL(file));
    setImages(selectedImages);
  };

  useEffect(() => {
    if (valuation.totalPrice !== undefined) {
      setBuybackPrice(valuation.totalPrice);
    }
  }, [valuation.totalPrice]);

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
              value={Name}
              onChange={(e) => setName(e.target.value)}
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
            <FormControl fullWidth margin="normal">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
                sx={{ color: 'gray' }}
              >
                <MenuItem value="Vòng Tay">Vòng Tay</MenuItem>
                <MenuItem value="Nhẫn">Nhẫn</MenuItem>
                <MenuItem value="Dây Chuyền">Dây Chuyền</MenuItem>
              </Select>
            </FormControl>
          </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Component 1</InputLabel>
                        <Select
                          value={components[0] || ''}
                          onChange={(e) => setComponents([e.target.value, components[1]])}
                          sx={{ color: 'gray' }}
                        >
                          <MenuItem value="gold 18k">Gold 18k</MenuItem>
                          <MenuItem value="gold 24k">Gold 24k</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth margin="normal">
                        <InputLabel>Component 2</InputLabel>
                        <Select
                          value={components[1] || ''}
                          onChange={(e) => setComponents([components[0], e.target.value])}
                          sx={{ color: 'gray' }}
                        >
                          <MenuItem value="diamond natural">Natural Diamond</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>



          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Diamond Weight"
              value={diamondWeight}
              onChange={(e) => setDiamondWeight(e.target.value)}
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
        </Grid>
        <Button
        variant="contained"
        color="secondary"
        fullWidth
        type="submit"
        sx={{
          mt: 2,
          bgcolor: 'blue',
          color: 'white',
          fontWeight: 'bold',
          height: '40px', // Adjust height as needed
          padding: '8px',
          '&:hover': {
            bgcolor: 'purple',
          },
          '&:focus': {
            bgcolor: 'black',
          },
        }}
      >
        Send Request
      </Button>
    </form>
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={handleCalculateBuybackPriceClick}
      disabled={goldWeight === '' || diamondWeight === ''}
      sx={{
        mt: 2,
        bgcolor: 'green',
        color: 'white',
        fontWeight: 'bold',
        height: '40px', // Adjust height as needed
        padding: '8px',
        '&:hover': {
          bgcolor: 'red',
        },
        '&:focus': {
          bgcolor: 'black',
        },
      }}
    >
      Calculate Buyback Price 
    </Button>
      {buybackPrice !== null && (
        <Box mt={3} border={1} p={2} borderColor="primary.main">
          <Typography variant="h6" gutterBottom>
            Thông tin chi tiết sản phẩm
          </Typography>
          {images.length > 0 && (
            <Box display="flex" justifyContent="center" mt={2}>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '0 8px 8px 0' }}
                />
              ))}
            </Box>
          )}
          <Typography variant="body1">
            Tên sản phẩm: {Name}
          </Typography>
          <Typography variant="body1">
            Loại: {type}
          </Typography>
          <Typography variant="body1">
            Giá mua lại : {buybackPrice} đồng
          </Typography>
          {/* Thêm các thông tin chi tiết khác tùy theo cấu trúc của `productDetail` */}
        </Box>
      )}
    </Box>
  );
};

export default Buy;