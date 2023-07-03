import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

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
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Enter Password"),
});

export default function SignIn({ tosignup, close }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ position: "relative" }}>
      <CssBaseline />
      <IconButton
        onClick={close}
        sx={{ position: "absolute", top: -40, right: -30, color: "black" }}
      >
        <CloseIcon />
      </IconButton>
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
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form noValidate>
            <Field
              as={TextField}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={textFieldStyle}
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: "12px", display:'inline' }}
            />
            <Field
              as={TextField}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={textFieldStyle}
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: "12px", display:'inline' }}
            />
            <Grid container alignItems="center">
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid></Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,borderRadius:'24px', backgroundColor:'orange', '&:hover':{backgroundColor:'darkorange'} }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  onClick={tosignup}
                  sx={{ color: "gray", cursor: "pointer" }}
                  variant="body2"
                >
                  Forgot Password?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  onClick={tosignup}
                  sx={{ color: "gray", cursor: "pointer" }}
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}
