import React, { useState } from "react";

import {
  Box,
  Typography,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { styled } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import ServeTimeCal from "./serveTimeCal";
import TrendingRecipe from "./trendingRecipe";

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Hero = () => {
  const [index, setIndex] = useState(0);

  const trendingRecipes = [
    {
      name: "Pasta Carbonara",
      link: "https://www.adventuresofanurse.com/wp-content/uploads/2017/01/Pasta-Carbonara-Cheesecake-Factory-720x405.jpg",
      tags: ["Italian", "Pasta", "Comfort"],
      persons: 2,
      time: 30,
      calorie: 500,
      description:
        "Classic Italian pasta dish with creamy sauce and crispy bacon.",
    },
    {
      name: "Chicken Tikka Masala",
      link: "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.683xw:1.00xh;0.221xw,0&resize=1200:*",
      tags: ["Indian", "Curry", "Spicy"],
      persons: 4,
      time: 45,
      calorie: 600,
      description:
        "Spicy and flavorful grilled chicken in a rich tomato-based curry sauce.",
    },
    {
      name: "Avocado Toast",
      link: "https://www.secondrecipe.com/wp-content/uploads/2022/05/avocado-toast.jpg",
      tags: ["Breakfast", "Healthy", "Simple"],
      persons: 1,
      time: 10,
      calorie: 300,
      description:
        "Simple and nutritious toast topped with mashed avocado and seasonings.",
    },
    {
      name: "Chocolate Chip Cookies",
      link: "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg",
      tags: ["Desserts", "Baking", "Indulgent"],
      persons: 12,
      time: 20,
      calorie: 200,
      description:
        "Classic homemade cookies with gooey chocolate chips in every bite.",
    },
    {
      name: "Caprese Salad",
      link: "https://www.foodnetwork.com/content/dam/images/food/fullset/2003/9/22/0/tm1a35_caprese_salad.jpg",
      tags: ["Italian", "Salad", "Fresh"],
      persons: 2,
      time: 15,
      calorie: 250,
      description:
        "Refreshing salad made with fresh tomatoes, mozzarella, and basil.",
    },
    {
      name: "Fish Tacos",
      link: "https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
      tags: ["Mexican", "Seafood", "Crispy"],
      persons: 3,
      time: 35,
      calorie: 400,
      description:
        "Delicious and crispy tacos filled with seasoned fish and toppings.",
    },
    {
      name: "Mango Salsa",
      link: "https://www.jessicagavin.com/wp-content/uploads/2018/04/mango-salsa-4-1200.jpg",
      tags: ["Snacks", "Fruit", "Zesty"],
      persons: 4,
      time: 10,
      calorie: 150,
      description:
        "Sweet and tangy salsa made with fresh mangoes, onions, and cilantro.",
    },
    {
      name: "Beef Stir-Fry",
      link: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Chinese-Beef-Stir-Fry-Recipe-500x500.jpg",
      tags: ["Asian", "Quick", "Savory"],
      persons: 4,
      time: 25,
      calorie: 450,
      description:
        "Flavorful stir-fried beef with colorful vegetables and a savory sauce.",
    },
    {
      name: "Spinach and Feta Stuffed Chicken",
      link: "https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/spinach-and-feta-cheese-stuffed-chi-8.jpg",
      tags: ["Healthy", "Chicken", "Cheesy"],
      persons: 2,
      time: 40,
      calorie: 350,
      description:
        "Tender chicken breasts filled with spinach and feta cheese, baked to perfection.",
    },
    {
      name: "Guacamole",
      link: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/02/The-Best-Guacamole-Recipe.jpg",
      tags: ["Mexican", "Dips", "Creamy"],
      persons: 6,
      time: 15,
      calorie: 180,
      description:
        "Creamy and zesty dip made with ripe avocados, tomatoes, and lime juice.",
    },
  ];

  const handleIncrementClick = () => {
    if (index === 8) {
      setIndex(0);
    } else {
      setIndex(index + 2);
    }
  };

  const handleDecrementClick = () => {
    if (index === 0) {
      setIndex(8);
    } else {
      setIndex(index - 2);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} sx={{ display: "flex" }}>
        <Box
          sx={{
            paddingX: 2,
            paddingTop: 0.5,
            paddingBottom: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            backgroundColor: "rgba(128, 128, 128, 0.075)",
          }}
        >
          <Paper>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                backgroundColor: "white",
                width: "fit-content",
                paddingY: 0.5,
                paddingX: 1.5,
                borderRadius: "10px",
                // marginTop:0.5,
                textAlign: "center",
              }}
            >
              Healthy Recipe
            </Typography>
          </Paper>

          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Delicious Sprouts Salad
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            Sprout Salad is a healthy, gluten-free, and vegan salad made with
            green moong bean sprouts and colourful vegetables.
          </Typography>
          <ServeTimeCal serve="1" time="25" cal="90" />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AccountCircleOutlinedIcon sx={{ fontSize: 48 }} />
            <Box>
              <Typography variant="subtitle1">Jon Ray</Typography>
              <Typography variant="body1">1st June</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <StyledImg
            src={require("../assets/Sprout-Salad.jpg")}
            alt="sprout salad"
          />
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          sx={{
            // padding: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(128, 128, 128, 0.075)",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper sx={{ marginTop: 0.5 }}>
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: "white",
                  width: "fit-content",
                  paddingY: 0.5,
                  paddingX: 1.5,
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                Trending Recipes
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton onClick={handleDecrementClick}>
              <ArrowBackIosNewIcon fontSize="medium" sx={{ color: "black" }} />
            </IconButton>
            <TrendingRecipe recipe={trendingRecipes[index]} />
            <TrendingRecipe recipe={trendingRecipes[index + 1]} />
            <IconButton onClick={handleIncrementClick}>
              <ArrowForwardIosIcon fontSize="medium" sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
