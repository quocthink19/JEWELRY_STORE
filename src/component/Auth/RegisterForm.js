import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from '../State/Authentication/Action';


const initialValues = {
  fullname:"",
  username: "",
  password: "",
  gender :"" ,
  email: "",
  role:"",
};
export default function RegisterForm() {
   const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(registerUser({userData:values,navigate}))
  };
  return (
    <div>
      <Typography variant="h5" className="text-center">
        register
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="fullname"
            label="fullName"
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Field
          as={TextField}
          name="username"
          label="userName"
          fullWidth
          variant="outlined"
          margin="normal"

        />
          <Field
          as={TextField}
          name="password"
          label="password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
        />
        <Field
        fullWidth margin="normal"
        as={Select}
          labelId="role-simple-select-label"
          id="demo-simple-select"
          name="gender"
        >
          <MenuItem value={"Man"}>Man</MenuItem>
          <MenuItem value={"Woman"}>Woman</MenuItem>
      
        </Field>
          <Field
            as={TextField}
            name="email"
            label="email"
            fullWidth
            variant="outlined"
            margin="normal"
            type="normal"
          />

  <Field
  fullWidth margin="normal"
  as={Select}
    labelId="role-simple-select-label"
    id="demo-simple-select"
    name="role"
  >
    <MenuItem value={"ROLE_STAFF"}>Staff</MenuItem>
    <MenuItem value={"ROLE_MANAGER"}>Manager</MenuItem>
    <MenuItem value={"ROLE_JEWELRY_OWNER"}>Owner</MenuItem>

  </Field>
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            className="mt-5"
            fullWidth
            type="submit"
            variant="contained"
          > register</Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
      If have an account already?
        <Button size="small" onClick={() => navigate("/account/login")}>
         register
        </Button>
      </Typography>
    </div>
  )
}
