import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
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
  const [loginError] = useState({ username: "", password: "" });

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }))
      .then((response) => {
        // Giả sử response chứa trạng thái đăng nhập
        if (response.success) {
          toast.success("Login succeeded");
        } else {
          // Kiểm tra nếu có thông báo lỗi cụ thể từ server
          if (response.message === "Invalid username or password") {
            toast.error("Sai username hoặc password. Vui lòng thử lại.");
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
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <img
            src="https://cdn.pnj.io/images/logo/pnj.com.vn.png"
            alt="Logo"
            style={{ width: "100px" }}
          />
        </div>
        <Typography
          variant="h5"
          className="text-center"
          style={{ color: "black" }}
        >
          Login
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <Field
              as={TextField}
              name="username"
              label="Username"
              fullWidth
              variant="outlined"
              margin="normal"
              error={!!loginError.username}
              helperText={loginError.username}
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
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              error={!!loginError.password}
              helperText={loginError.password}
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
            <Button
              sx={{
                mt: 2,
                padding: "1rem",
                background: "linear-gradient(to right, gray, yellow)",
                color: "white",
              }}
              className="mt-5"
              fullWidth
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </Form>
        </Formik>
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: "black" }}
        >
          Don't have an account?
          <Button
            size="big"
            onClick={() => navigate("/account/register")}
            sx={{ color: "" }}
          >
            Register
          </Button>
        </Typography>
        <ToastContainer />
      </div>
    </div>
  );
}
