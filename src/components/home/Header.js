import React from "react";
import { InputBase, Button, Box, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
        sx={{ alignItems: "center", justifyContent: "center", marginY: 1.5 }}
      >
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img
              src={require("../assets/logo.jpg")}
              alt="Logo"
              style={{ height: "100px", width: "100px" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                background: "#fff",
                borderRadius: "2rem",
                alignItems: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                border: "1px solid #000",
                width: "60%",
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
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                // gap: 1,
              }}
            >
              <Button variant="text" sx={buttonStyle}>
                Home
              </Button>
              <Button variant="text" sx={buttonStyle}>
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
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
