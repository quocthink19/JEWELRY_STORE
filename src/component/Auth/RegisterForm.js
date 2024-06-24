import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../State/Authentication/Action';

const initialValues = {
  fullname: "",
  username: "",
  password: "",
  gender: "",
  email: "",
  role: "",
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(registerUser({ userData: values, navigate }))
      .then(() => {
        // On successful registration, navigate to the login page or a success page
        navigate("/account/login"); // or navigate("/registration-success");
      })
      .catch((error) => {
        console.error("Registration failed", error);
        // Handle registration error here
      });
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/5442446/pexels-photo-5442446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img src="https://cdn.pnj.io/images/logo/pnj.com.vn.png" alt="Logo" style={{ width: '100px' }} />
        </div>
        <Typography variant="h5" className="text-center" style={{ color: 'black' }}>
          Register
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
          <Form>
            <Field
              as={TextField}
              name="fullname"
              label="Full Name"
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
            <Field
              as={TextField}
              name="username"
              label="Username"
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
            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
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
              as={Select}
              name="gender"
              fullWidth
              margin="normal"
              variant="outlined"
              displayEmpty
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
              }}
            >
              <MenuItem value="">
                <em>Gender</em>
              </MenuItem>
              <MenuItem value={"Man"}>Man</MenuItem>
              <MenuItem value={"Woman"}>Woman</MenuItem>
            </Field>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              type="email"
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
              as={Select}
              name="role"
              fullWidth
              margin="normal"
              variant="outlined"
              displayEmpty
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
              }}
            >
              <MenuItem value="">
                <em>Role</em>
              </MenuItem>
              <MenuItem value={"ROLE_STAFF"}>Staff</MenuItem>
              <MenuItem value={"ROLE_MANAGER"}>Manager</MenuItem>
              <MenuItem value={"ROLE_JEWELRY_OWNER"}>Owner</MenuItem>
            </Field>
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
              Register
            </Button>
          </Form>
        </Formik>
        <Typography variant="body2" align="center" sx={{ mt: 3, color: 'black' }}>
          If you already have an account,
          <Button size="small" onClick={() => navigate("/account/login")} sx={{ color: 'blue' }}>
            Login
          </Button>
        </Typography>
      </div>
    </div>
  );
}
