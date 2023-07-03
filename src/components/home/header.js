import React, { useState } from "react";
import { InputBase, Button, Box, Grid, Typography, Modal } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.6)", 
  zIndex: 1, 
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  paddingX: 4,
};

const buttonStyle = {
  textTransform: "capitalize",
  borderRadius: "8px",
  fontWeight: "bold",
  color: "black",
};

const Header = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);

  const signInToSignUp = () => {
    handleCloseSignIn();
    handleOpenSignUp();
  };

  const signUpToSignIn = () => {
    handleCloseSignUp();
    handleOpenSignIn();
  };

  return (
    <>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
          borderBottom: 3,
          borderBottomColor: "rgba(128, 128, 128, 0.075)",
          marginBottom: 1.5,
        }}
      >
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Link to="/">
                <img
                  src={require("../assets/logo2.jpg")}
                  alt="Logo"
                  style={{ height: "100px", width: "100px" }}
                />
              </Link>
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: "#f2b50c",
                fontWeight: "bold",
                fontStyle: "italic",
                marginTop: -2,
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#f2b50c" }}>
                Recipeeeasy
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#52514f",
                fontWeight: "light",
                fontStyle: "italic",
                marginTop: -0.5,
              }}
            >
              Recipes made easy peasy!
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            paddingX: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              background: "#fff",
              borderRadius: "2rem",
              alignItems: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              border: "1px solid #000",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <SearchIcon style={{ marginLeft: "10px", marginRight: "5px" }} />
            <InputBase
              placeholder="Search"
              style={{
                padding: "5px",
                borderRadius: "8px",
                border: "none",
              }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              // gap: 1,
            }}
          >
            <Button variant="text" sx={buttonStyle} component={Link} to="/">
              Home
            </Button>
            <Button
              variant="text"
              sx={buttonStyle}
              component={Link}
              to="/explore"
            >
              Explore
            </Button>
            <Button variant="text" sx={buttonStyle} component={Link} to="/create">
              Create
            </Button>
            <Button variant="text" sx={buttonStyle}>
              About Us
            </Button>
            <Button variant="text" sx={buttonStyle}>
              Contact Us
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Button
              variant="text"
              onClick={handleOpenSignIn}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                color: "black",
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              onClick={handleOpenSignUp}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                backgroundColor: "orange",
                "&:hover": { backgroundColor: "darkorange" },
                color: "black",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Modal open={openSignIn} onClose={handleCloseSignIn}>
        <Box sx={modalStyle}>
          <SignIn tosignup={signInToSignUp} close={handleCloseSignIn} />
        </Box>
      </Modal>
      <Modal open={openSignUp} onClose={handleCloseSignUp}>
        <Box sx={modalStyle}>
          <SignUp tosignin={signUpToSignIn} close={handleCloseSignUp} />
        </Box>
      </Modal>
      {(openSignIn || openSignUp) && <div style={overlay} />}
    </>
  );
};

export default Header;
