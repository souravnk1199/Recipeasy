import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { styled } from "@mui/system";
import ServeTimeCal from "./serveTimeCal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const RecipeApp = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            height: "21rem",
            backgroundColor: "rgba(128, 128, 128, 0.075)",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              paddingX: 10,
              paddingY: 1,
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: 14,
                backgroundColor: "white",
                width: "fit-content",
                padding: 0.5,
                borderRadius: "10px",
              }}
            >
              Healthy Recipe
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Delicious Sprouts Salad
            </Typography>
            <Typography variant="body2" sx={{ width: "20rem" }}>
              Sprout Salad is a healthy, gluten-free, and vegan salad made with
              green moong bean sprouts and colourful vegetables.
            </Typography>
            <ServeTimeCal serve="1" time="25" cal="90" />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AccountCircleOutlinedIcon fontSize="large" />
              <Box>
                <Typography variant="subtitle1">Jon Ray</Typography>
                <Typography variant="body1">1st June</Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                bottom: 5,
                right: 5,
                backgroundColor: "darkgray",
                "&:hover": { backgroundColor: "   gray" },
              }}
            >
              View
            </Button>
          </Box>
          <Box>
            <StyledImg
              src={require("../assets/Sprout-Salad.jpg")}
              alt="sprout salad"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: 5,
            height: "21rem",
            backgroundColor: "rgba(128, 128, 128, 0.075)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Trending Recipes
            </Typography>
            <Box>
              <img
                src={require("../assets/brownie.jpg")}
                alt="Recipe"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </Box>
            <Typography variant="h6">Chocolate Brownie </Typography>
            <Typography variant="body1">
              International.Desserts.Snacks
            </Typography>
            <ServeTimeCal serve="2" time="35" cal="320" />
            <Typography variant="body2">
              World's best fudgiest brownies recipe! perfect crisp crackly top,
              super fudgy, gooey in all the right places{" "}
            </Typography>
          </Box>
          <Box>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RecipeApp;
