import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }))
      .then((response) => {
        // Giả sử response chứa trạng thái đăng nhập
        if (response.success) {
          toast.success("Login succeeded");
        } else {
          // Kiểm tra nếu có thông báo lỗi cụ thể từ server
          if (response.message === "Invalid username or password") {
            toast.error("Error username or password. Please try again.");
          } else {
            // Nếu lỗi không rõ ràng, hiển thị thông báo chung
            toast.error(`Login failed: ${response.message}`);
          }
        }
      })
      .catch((error) => {
        // Hiển thị thông báo chung khi có lỗi không xác định từ server
        toast.error("Login failed. Please try again.");
      });
  };


  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    } else if (/[^a-zA-Z0-9]/.test(values.username)) {
      errors.username = "Username must not contain special characters";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
      errors.password = "Password must contain at least one special character";
    }

    return errors;
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5442446/pexels-photo-5442446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
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
        <Typography variant="h5" align="center" style={{ marginBottom: "1rem" }}>
          Login
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
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
                helperText={touched.username && errors.username ? errors.username : ""}
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
                helperText={touched.password && errors.password ? errors.password : ""}
                error={touched.password && Boolean(errors.password)}
              />
              <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: "1rem" }}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
        <Typography variant="body2" align="center" style={{ marginTop: "1rem" }}>
          Don't have an account?{" "}
          <Button color="primary" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Typography>
        <ToastContainer />
      </div>
    </div>
  );
}
