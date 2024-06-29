
import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItemByCode } from '../../component/State/Menu/Action';
import { calculateBuybackPrice } from '../../component/State/Valuation/Action';

const Buy = () => {
  const [productCode, setProductCode] = useState('');
  const [productDetail, setProductDetail] = useState(null); // State để lưu trữ thông tin chi tiết sản phẩm
  const dispatch = useDispatch();
  const { menu, valuation } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt");
  const [jewelryImage, setjewelryImage] = useState('');

  const handlePriceCalculation = async () => {
    try {
      await dispatch(getMenuItemByCode({ code: productCode, jwt }));

      // Sau khi lấy thông tin sản phẩm thành công, lấy dữ liệu sản phẩm từ store (nếu đã lưu vào store)
      const jewelry = menu.search;
      await dispatch(calculateBuybackPrice({ jewelry, jwt }));

      const imageUrl = jewelry.images[0]; // Giả sử là lấy hình ảnh đầu tiên trong mảng images
      setjewelryImage(imageUrl);
      // Lấy thông tin chi tiết sản phẩm từ `menu.search` và lưu vào state `productDetail`
      setProductDetail(menu.search);

    } catch (error) {
      console.error('Error:', error);
      // Xử lý lỗi nếu có
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý logic gửi dữ liệu lên server tại đây
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      maxWidth="400px"
      mx="auto"
    >
      <Typography variant="h4" gutterBottom>
        Exchange
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          label="Product Code"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
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
        <Box mt={2}>
          <Button onClick={handlePriceCalculation} variant="contained" color="primary" fullWidth sx={{
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
            Định Giá
          </Button>
        </Box>
        {/* Hiển thị thông tin chi tiết sản phẩm */}
        {productDetail && (
          <Box mt={3} border={1} p={2} borderColor="primary.main">
          <img src={jewelryImage} alt={productDetail.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <Typography variant="h6" gutterBottom>
              Thông tin chi tiết sản phẩm
            </Typography>
            <Typography variant="body1">
              Tên sản phẩm: {productDetail.name}
            </Typography>
            <Typography variant="body1">
              Loại: {productDetail.jewelryCategory.name}
            </Typography>
            <Typography variant="body1">
              Giá mua lại : {valuation.totalPrice} đồng
            </Typography>
            {/* Thêm các thông tin chi tiết khác tùy theo cấu trúc của `productDetail` */}
          </Box>
        )}
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{
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
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Buy;