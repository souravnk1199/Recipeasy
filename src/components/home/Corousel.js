import Grid from "@mui/material/Grid";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { ArrowForwardIos } from "@mui/icons-material";

import Item from "./Item";

const StyledImg = styled("img")({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
});

const Corousel = () => {
  const categories = [
    {
      link: "https://pbs.twimg.com/media/ERKYdzIXkAYMyW3.png",
      title: "Breakfast",
    },
    {
      link: "https://pbs.twimg.com/media/EY9p4YCXQAMosnQ?format=jpg&name=large",
      title: "Vegan",
    },
    {
      link: "https://static.vecteezy.com/system/resources/previews/010/894/530/original/burger-fast-food-icon-cheese-bread-bun-meat-lettuce-restaurant-menu-grilled-sesame-cartoon-snack-ad-bistro-vector.jpg",
      title: "Snacks",
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6GtiIc9bPm2NSPO6JzYdkhe1ip-1hO6l03oMvsyBXNHqp0sxYadogNs_K01z9wAuN8hdLJPl3U0&usqp=CAU&ec=48600113",
      title: "Lunch",
    },
    {
      link: "https://us.123rf.com/450wm/yupiramos/yupiramos1709/yupiramos170905741/85136290-cake-cherry-dessert-pastry-product-food-fresh-vector-illustration.jpg?ver=6",
      title: "Dessert",
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
      <Grid container spacing={1}>
        <Grid item xs={9}>
          <Typography variant="h6">Categories</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {categories.map((item, index) => (
              <Item key={index} image={item.link} title={item.title} />
            ))}
            <ArrowForwardIos />
          </Box>

          <Typography marginBottom={1} variant="h6">
            Recipe Box
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {recipebox.map((item, index) => (
              <Item image={item.link} key={index} title={item.title} />
            ))}
            <ArrowForwardIos />
          </Box>

          <Typography marginBottom={1} variant="h6">
            Explore More
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {exploremore.map((item, index) => (
              <Item image={item.link} key={index} title={item.title} />
            ))}
            <ArrowForwardIos />
          </Box>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Seasonal Recipes</Typography>

          <ImageList
            sx={{
              width: 220,
              height: 350,
              overflow: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
            cols={1}
          >
            {seasonal.map((item) => (
              <ImageListItem
                key={item.link}
                sx={{ alignItems: "center", justifyContent: "center" }}
              >
                <StyledImg src={item.link} alt={item.title} />
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
};

export default Corousel;
