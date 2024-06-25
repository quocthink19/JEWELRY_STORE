import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }))
      .then(() => {
        toast.error("Login failed");
        // toast.success("Login successful!");
        // Optionally, redirect to a different page after a successful login
        // navigate("/some-page");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          toast.error(`Login failed: ${error.response.data.message}`);
        } else {
          toast.error("Login failed. Please try again.");
        }
      });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else if (values.password.length > 15) {
      errors.password = "Password must not exceed 15 characters";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    }

    return errors;
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/5442446/pexels-photo-5442446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          style={{ marginBottom: "1rem" }}
        >
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ errors, touched, handleBlur }) => (
            <Form>
              <Field
                as={TextField}
                name="username"
                label="Username"
                fullWidth
                margin="normal"
                variant="outlined"
                onBlur={handleBlur}
                helperText={
                  touched.username && errors.username ? errors.username : ""
                }
                error={touched.username && Boolean(errors.username)}
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                onBlur={handleBlur}
                helperText={
                  touched.password && errors.password ? errors.password : ""
                }
                error={touched.password && Boolean(errors.password)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "1rem" }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Typography
          variant="body2"
          align="center"
          style={{ marginTop: "1rem" }}
        >
          Don't have an account?{" "}
          <Button color="primary" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Typography>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginForm;
