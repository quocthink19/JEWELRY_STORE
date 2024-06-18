import React from "react";
import {
  Divider,
  Button,
  Card,
  Modal,
  Box,
  Grid,
  TextField,
} from "@mui/material";
import CartItem from "./CartItem"; // Moved to the top
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormik } from "formik";

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
const initialValues = {
  stressAddress: "",
  state: "",
  pincode: "",
  city: "",
};
const items = [1, 1];

const Cart = () => {
  const createOrderUsingSelectedAddress = () => {};
  const handleOpenAddressModal = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values) => {
    console.log("form value ", values);
  };
  return (
    <>
      <div>
        <main className="lg:flex justify-between">
          <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
            {items.map((item) => (
              <CartItem />
            ))}

            <Divider />
            <div className="billDetails px-5 text-sm">
              <p className="font-extralight py-5">Bill Details</p>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-400">
                  <p>Item Total</p>
                  <p>$1000</p>
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
                <p>$3330</p>
              </div>
            </div>
          </section>
          <Divider orientation="vertical" flexItem />
          <section className="lg:w-[70%] flex justify-center px-5 pb-0 lg:pb-0">
            <div>
              <h1 className="text-center font-semibold text-2xl py-10">
                Choose Deli Address
              </h1>
              <div className="flex gap-5 flex-wrap justify-center">
                {[1, 1, 1, 1, 1].map((item) => (
                  <AddressCard
                    handleSelectAddress={createOrderUsingSelectedAddress}
                    item={item}
                    showButton={true}
                  />
                ))}
                <Card className="flex gap-5 w-64 p-5">
                  <AddLocationAltIcon />
                  <div className="space-y-3 text-gray-500">
                    <p> Add new address</p>
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
                      Add
                    </Button>
                  </div>
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
            <Formik
              initialValues={initialValues}
              //validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="stressAddress"
                      label="Street Address"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("stressAddress")}
                      // helperText={
                      //   <ErrorMessage>
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="state"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("stressAddress")}
                      // helperText={
                      //   <ErrorMessage>
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="city"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("stressAddress")}
                      // helperText={
                      //   <ErrorMessage>
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="pin code"
                      fullWidth
                      variant="outlined"
                      // error={!ErrorMessage("stressAddress")}
                      // helperText={
                      //   <ErrorMessage>
                      //     {(msg) => <span className="text-red-600">{msg}</span>}
                      //   </ErrorMessage>
                      // }
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
                      Delivery Here
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
