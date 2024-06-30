

import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Typography, Modal, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItemByCode } from '../../component/State/Menu/Action';
import { calculateBuybackPrice } from '../../component/State/Valuation/Action';
import { Formik, Form, Field } from 'formik';
import { createBuyback } from '../State/Buyback/Action'; // Thay đổi đường dẫn và tên action nếu cần
import { getUser } from '../State/Authentication/Action';

const Buy = () => {
  const [productCode, setProductCode] = useState('');
  const [productDetail, setProductDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const dispatch = useDispatch();
  const { menu, valuation , auth } = useSelector(store => store);
  const jwt = localStorage.getItem("jwt");
  const [jewelryImage, setJewelryImage] = useState('');


  const handlePriceCalculation = async () => {
    try {
      await dispatch(getMenuItemByCode({ code: productCode, jwt }));
      const jewelry = menu.search;
      await dispatch(calculateBuybackPrice({ jewelry, jwt }));

      const imageUrl = jewelry.images[0];
      setJewelryImage(imageUrl);
      setProductDetail(menu.search);
      
      // Do not open the modal here; wait for form submission
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  const handleSubmit = async (values, actions) => {
    // Perform form submission logic here
    // You can also validate form values here before further action

    // Open the modal after successful form submission
    setIsModalOpen(true);

    // Reset form submission state if needed
    actions.setSubmitting(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const initialValues = {
    fullname: '',
    mobile: '',
    email: '',
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form style={{ width: '100%' }}>
            <TextField
              label="Product Code"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <Box mt={2}>
              <Button
                onClick={handlePriceCalculation}
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting} // Disable button while submitting
              >
                Định Giá
              </Button>
            </Box>
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
              </Box>
            )}
            <Box mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={!productDetail || isSubmitting} // Disable button until valid product detail is available
              >
                BUY BACK
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            thông tin khách hàng
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              dispatch(
                createBuyback(
                  {
                    // staffId : auth.user.id ,
                    fullname: values.fullname,
                    mobile: values.mobile,
                    email: values.email,
                  },
                  productCode,
                  jwt
                )
              );
              handleCloseModal();
              actions.setSubmitting(false);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="fullname"
                    label="Full Name"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="mobile"
                    label="Mobile"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" fullWidth type="submit">
                    Buy Back
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </Box>
  );
};

export default Buy;

