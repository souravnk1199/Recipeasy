import React from "react";
import { InputBase, Button, Box, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

const Header = () => {
  const buttonStyle = {
    textTransform: "capitalize",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "black",
  };

  return (
    <>
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
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
              Recipe
            </Button>
            <Button variant="text" sx={buttonStyle}>
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
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                color: "black",
                backgroundColor: "white",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
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
    </>
  );
};

export default Header;
