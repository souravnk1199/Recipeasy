import React from "react";

import Grid from "@mui/material/Grid";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import Slider from "./slider";

const StyledImg = styled("img")({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
  boxShadow:'3px 5px 10px gray',
});


const Corousel = () => {
  const categories = [
    {
      link: "https://img.freepik.com/premium-photo/idly-idli-south-indian-main-breakfast-item-which-is-beautifully-arranged-black-plate_527904-2906.jpg",
      title: "Breakfast",
    },
    {
      link: "https://images.immediate.co.uk/production/volatile/sites/30/2018/06/Vegan-salad-bowl-499145d.jpg",
      title: "Vegan",
    },
    {
      link: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg",
      title: "Snacks",
    },
    {
      link: "https://t2p.fra1.digitaloceanspaces.com/16578846256021ypyc.png",
      title: "Lunch",
    },
    {
      link: "https://lh3.googleusercontent.com/b4_sX0xUtNcRm9wR3OG7PzcGGp0nlc0AFGKdhRjOjMax93NGAkc3hOtv8VMwg8kcJsGJWFV9V4ygnPcAUqRfm4MlG3BM7M48XzC2RAg=w512-rw",
      title: "Dessert",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa",
    },

    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",

      title: "Cheese Balls",
    },
  ];

  const recipebox = [
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Samosa",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Samosa",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
    },
  ];

  const exploremore = [
    {
      link: "https://img.freepik.com/premium-photo/delicious-bbq-kebab-grilling-open-grill_795881-421.jpg?w=2000",
      title: "Grilling & BBQ",
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaqUZq8sFt_Bt25W08Ytk6HqSuHMAS0ue8g5SA3oSYPCXHdmj3rskR-z2brvgEZYwrJgPcsdSbd0&usqp=CAU&ec=48600113",
      title: "International Eats",
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-4xjzNh4izyLenX7eEPx52KnzfOHZRPug7DHubNC3A&usqp=CAU&ec=48600113",
      title: "Confectionary",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
    },
    {
      link: "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35567.jpg",
      title: "Community Picks",
    },
  ];

  const seasonal = [
    {
      link: "https://afoodloverskitchen.com/wp-content/uploads/oreo-cookie-ice-cream-f1.jpg",
      title: "Oreo Icecream",
    },
    {
      link: "https://www.thespruceeats.com/thmb/2OtSFFC5_A1AHmWFi2GQ29t_L2o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mango-mojito-recipe-5197855-hero-01-8a9be17c165242c39b2cb88d401d266f.jpg",
      title: "Mango Mojito",
    },
    {
      link: "https://lifemadesweeter.com/strawberry-smoothie/easy-strawberry-smoothie-recipe-vegan-whole30-paleo-keto/",
      title: "Strawberry Smoothie",
    },
    {
      link: "https://pbs.twimg.com/media/ERKYdzIXkAYMyW3.png",
      title: "Breakfast",
    },
    {
      link: "https://pbs.twimg.com/media/EY9p4YCXQAMosnQ?format=jpg&name=large",
      title: "Vegan",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Samosa",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
    },
  ];

  return (
    <>
      <Grid container spacing={2} sx={{ height: "100%" }}>
        <Grid item md={9} xs={12} sx={{ height: "100%" }}>
          <Slider name={"Categories"} list={categories} />
          <Slider name={"Recipe Box"} list={recipebox} />
          <Slider name={"Explore More"} list={exploremore} />
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <Slider name={"Seasonal Recipes"} list={seasonal} />
          </Box>
        </Grid>

        <Grid item xs={3} sx={{display:{ xs: "none", md: "flex", width:'100%' }}}>
          <Paper
            sx={{
              display:{ xs: "none", md: "flex" },
              marginY: 2,
              backgroundColor: "rgba(128, 128, 128, 0.075)",
              padding:2,
              width:'100%'
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width:'100%'
              }}
            >
              <Typography variant="h5" marginBottom={3}>
                Seasonal Recipes
              </Typography>
              <ImageList
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: '544px',
                  overflow: "auto",
                  "&::-webkit-scrollbar": {
                    width: "5px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor:'transparent',
                    borderRadius: "3px",
                    transition: "background-color 0.3s",
                  },
                  "&:hover::-webkit-scrollbar-thumb": {
                    backgroundColor: "grey",
                  },
                }}
                gap={30}
                cols={1}
              >
                {seasonal.map((item) => (
                  <ImageListItem
                    key={item.link}
                    sx={{ alignItems: "center", justifyContent: "center", gap:1, paddingX:2, }}
                  >
                    <StyledImg src={item.link} alt={item.title} />
                    <Typography variant="body2">{item.title}</Typography>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Corousel;
