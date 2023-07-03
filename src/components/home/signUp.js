import React, { useState } from "react";
import { FormikProvider, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const textFieldStyle = {
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "gray",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray",
  },
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])/,
      "Password should contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password should contain at least one uppercase letter"
    )
    .matches(/^(?=.*\d)/, "Password should contain at least one number")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password should contain at least one special character"
    )
    .min(7, "Password should be at least 7 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  location: Yup.string().required("Location is required"),
  gender: Yup.string().required("Gender is required"),
  specialty: Yup.string(),
});

export default function SignUp({ tosignin, close }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      location: "",
      gender: "",
      specialty: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        position: "relative",
      }}
    >
      <IconButton
        onClick={close}
        sx={{ position: "absolute", top: -5, right: -30, color: "black" }}
      >
        <CloseIcon />
      </IconButton>
      <CssBaseline />

      <Box
        sx={{
          margin: "16px 0", // Add margin at the top and bottom
          maxHeight: "80vh",
          overflowY: "auto",
          paddingRight: 2,
          "&::-webkit-scrollbar": {
            width: "6px",
            // display:'none'
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f5f5f5",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c0c0c0",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#a0a0a0",
          },
        }}
      >
        <Box
          sx={{
            marginY: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "orange" }}>
            <RestaurantMenuIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <FormikProvider value={formik}>
            <Form noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    sx={textFieldStyle}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    sx={textFieldStyle}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12} >
                  <Field name="gender">
                    {({ field }) => (
                      <RadioGroup
                        {...field}
                        row
                        aria-label="gender"
                        name="gender"
                        error={formik.touched.gender && formik.errors.gender}
                        sx={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="others"
                          control={<Radio />}
                          label="Others"
                        />
                      </RadioGroup>
                    )}
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    sx={textFieldStyle}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={handlePasswordVisibility}
                          edge="end"
                          size="small"
                        >
                          {passwordVisible ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      ),
                    }}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={passwordVisible ? "text" : "password"}
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    id="phoneNumber"
                    autoComplete="tel"
                    sx={textFieldStyle}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="specialty"
                    label="Specialty"
                    id="specialty"
                    sx={textFieldStyle}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    required
                    fullWidth
                    name="location"
                    label="Location"
                    id="location"
                    sx={textFieldStyle}
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "24px",
                  backgroundColor: "orange",
                  "&:hover": { backgroundColor: "darkorange" },
                }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography
                    onClick={tosignin}
                    sx={{ color: "gray", cursor: "pointer" }}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </Typography>
                </Grid>
              </Grid>
            </Form>
          </FormikProvider>
        </Box>
      </Box>
    </Container>
  );
}
