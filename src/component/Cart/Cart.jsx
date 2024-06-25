import React, { useState, useEffect } from "react";
import {
  Divider,
  Button,
  Card,
  Modal,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import { CartItem } from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../State/Order/Action";
import { addItemToCartByCode, applyCoupon } from "../State/Cart/Action";
import { checkOrCreateCustomer } from "../State/Customer/Action";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [formValues, setFormValues] = useState({
    fullname: "",
    mobile: "",
    email: "",
  });
  const { cart } = useSelector((store) => store);
  const { customer } = useSelector((store) => store.customer);
  const dispatch = useDispatch();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (customer) {
      setFormValues({
        fullname: customer.fullname || "",
        mobile: customer.mobile || "",
        email: customer.email || "",
      });
    }
  }, [customer]);

  const handleSubmit = (values) => {
    const data = {
      jwt: localStorage.getItem("jwt"),
      order: {
        staffId: cart.cart.staff.id,
        fullname: customer.fullname,
        mobile: customer.mobile ,
        email: customer.email
      },
    };
    dispatch(createOrder(data));
    console.log("form value ", values);

    dispatch(checkOrCreateCustomer(values));
  };

  const handleOpenAddressModal = () => setOpen(true);

  const handleAddToCart = () => {
    if (productCode.trim() === "") {
      alert("Please enter a product code.");
      return;
    }

    const reqData = {
      jwt: localStorage.getItem("jwt"),
      cartItem: {
        code: productCode,
        quantity: 1,
      },
    };

    dispatch(addItemToCartByCode(reqData));
    setProductCode("");
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim() === "") {
      alert("Please enter a coupon code.");
      return;
    }

    dispatch(applyCoupon(cart.cart.id, couponCode, localStorage.getItem("jwt")));
    setCouponCode("");
  };

  const calculateTotal = () => {
    const itemTotal = cart.cart?.total || 0;
    const deliveryFee = 21;
    const gstCharges = 33;
    const tax = 10;
    const totalBeforeDiscount = itemTotal + deliveryFee + gstCharges + tax;
    return totalBeforeDiscount;
  };

  return (
    <>
      <div>
        <main className="lg:flex justify-between">
          <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
            {cart.cartItems.map((item) => (
<CartItem key={item.id} item={item} />
            ))}

            <Divider />
            <div className="billDetails px-5 text-sm">
              <p className="font-extralight py-5">Bill Details</p>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-400">
                  <p>Item Total</p>
                  <p>{cart.cart?.total}</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>Delivery Fee</p>
                  <p>$21</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>GST and restaurant charges</p>
                  <p>$33</p>
                </div>
                <div className="flex justify-between text-gray-400">
                  <p>Tax</p>
                  <p>$10</p>
                </div>
                <Divider />
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Total Pay</p>
                <p>{calculateTotal()}</p>
              </div>
            </div>
          </section>
          <Divider orientation="vertical" flexItem />
          <section className="lg:w-[70%] flex justify-center px-5 pb-0 lg:pb-0">
            <div>
              <h1 className="text-center font-semibold text-2xl py-10">
                Choose Delivery Address
              </h1>
              <div className="flex gap-5 flex-wrap justify-center">
                {[1].map((item) => (
                  <AddressCard
                    key={item.id}
                    item={item}
                    showButton={true}
                  />
                ))}
                <Card className="flex gap-5 w-64 p-5">
                  <AddLocationAltIcon />
                  <div className="space-y-3 text-gray-500">
                    <p> Customer Information </p>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={handleOpenAddressModal}
                      sx={{
                        color: "blue", // Text color
                        borderColor: "blue", // Border color
                        "&:hover": {
                          borderColor: "darkblue", // Darker blue on hover
                          backgroundColor: "lightblue", // Light blue background on hover
                        },
                      }}
                    >
                      ADD
                    </Button>
                  </div>
                </Card>
                {/* Product Code Input */}
                <Card className="flex gap-5 w-64 p-5 mt-5">
                  <TextField
                    label="Product Code"
                    variant="outlined"
                    fullWidth
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                  />
                  <Button
variant="contained"
                    onClick={handleAddToCart}
                    sx={{
                      backgroundColor: "green", // Button background color
                      "&:hover": {
                        backgroundColor: "darkgreen", // Darker green on hover
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card>
                {/* Coupon Code Input */}
                <Card className="flex gap-5 w-64 p-5 mt-5">
                  <TextField
                    label="Coupon Code"
                    variant="outlined"
                    fullWidth
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    onClick={handleApplyCoupon}
                    sx={{
                      backgroundColor: "blue", // Button background color
                      "&:hover": {
                        backgroundColor: "darkblue", // Darker blue on hover
                      },
                    }}
                  >
                    Apply Coupon
                  </Button>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Formik initialValues={formValues} onSubmit={handleSubmit} enableReinitialize>
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
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        backgroundColor: "blue", // Button background color
                        "&:hover": {
                          backgroundColor: "darkblue", // Darker blue on hover
},
                      }}
                    >
                      Pay
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Cart;