import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Rating,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const StyledImg = styled("img")({
  width: '80%',
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
});

const RecipeOfTheDay = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Breakfast Recipe
      </Typography>
      <Typography variant="body1" gutterBottom>
        So whether you're in need of quick meal on the go or you're looking
        something special to serve this weekend, whether you wake up craving
        something sweet or you lean more towards something savory, there's sure
        to be something for everyone
      </Typography>
      <Paper
        sx={{
          marginTop: 3,
          marginX:5,
          paddingX: 5,
          paddingBottom: 3,
          paddingTop:1,
          backgroundColor: "rgba(128, 128, 128, 0.1)",
        }}
        elevation={3}
      >
        <Typography
          variant="h6"
          sx={{ marginBottom: 1, color: "red", fontWeight: "bold" }}
        >
          Recipe of the Day!
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={5}
            
          >
            <Box sx={{
              width:'100%',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <StyledImg
                src={require("../assets/cheddar_sandwich.jpg")}
                alt="Breakfast Sandwich"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ textAlign: "left" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h5">
                Cheddar and Onion Scottish Breakfast Sandwich!
              </Typography>
              <Typography variant="body2">
                This easy-to-make Cheddar and Onion Scottish Breakfast Sandwich
                with Egg, Ham, Spinach and Whole Grain Mustard is a perfect,
                Highland kind of morning meal.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                Vegetarian
              </Typography>
              <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body2" sx={{ marginLeft: 2 }}>
                  4.5 from 72 votes
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginLeft: 2, color: "green", fontWeight: "bold" }}
                >
                  88 Comments
                </Typography>
              </Stack>
              <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <TwitterIcon></TwitterIcon>
                <FacebookIcon></FacebookIcon>
                <InstagramIcon></InstagramIcon>
                <WhatsAppIcon></WhatsAppIcon>
                <Typography variant="body2" sx={{ marginLeft: 2 }}>
                  1.2k shares
                </Typography>
              </Stack>
              <Box>
                <Button
                  sx={{
                    backgroundColor: "orange",
                    color: "white",
                    "&:hover": { backgroundColor: "darkorange" },
                  }}
                  variant="contained"
                >
                  jump to recipe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default RecipeOfTheDay;
