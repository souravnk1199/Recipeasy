import Grid from "@mui/material/Grid";
import {
  Box,
  Pagination,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import Recipes from "./recipes";
import { useState } from "react";

const theme = createTheme({
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "green",
            color: "white",
          },
        },
      },
    },
  },
});
const Images = () => {
  const recipebox = [
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegetarian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegetarian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegetarian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegetarian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Beverages",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Eggterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://pic.warmoven.in/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/2287b12c/classic-belgian-chocolate-cake.jpg",
      title: "Cake| Eggless chocolate cake",
      minititle: "Vegetarian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
      title: "Masala Dosa| Rava Dosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://cdn3.foodviva.com/static-content/food-images/juice-recipes/blueberry-juice-recipe/blueberry-juice-recipe.jpg",
      title: "Berry Juice",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",
      title: "Crispy Aloo Samosa",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://www.cookwithnabeela.com/wp-content/uploads/2023/02/CheeseBalls.webp",
      title: "Cheese Balls",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
    {
      link: "https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg",
      title: "Quick & Easy",
      minititle: "Vegeterian",
      level: "Easy",
      time: "25",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentImages = recipebox.slice(startIndex, endIndex);

  const topImages = currentImages.slice(0, 6);
  const bottomImages = currentImages.slice(6, 12);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }} marginBottom={1}>
          Explore Recipes!
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-start",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          marginBottom={2}
        >
          {topImages.map((item, index) => (
            <Recipes
              key={index}
              image={item.link}
              title={item.title}
              minititle={item.minititle}
              level={item.level}
              time={item.time}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "flex-start",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          marginBottom={2}
        >
          {bottomImages.map((item, index) => (
            <Recipes
              key={index}
              image={item.link}
              title={item.title}
              minititle={item.minititle}
              level={item.level}
              time={item.time}
            />
          ))}
        </Box>
        <ThemeProvider theme={theme}>
          <Pagination
            count={Math.ceil(recipebox.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ justifyContent: "center", display: "flex" }}
            color="primary"
            shape="rounded"
          />
        </ThemeProvider>
        <Typography variant="h5" sx={{ fontWeight: "bold" }} marginBottom={2}>
          Tips for Making Breakfast Easier
        </Typography>
        <Typography variant="body2" marginBottom={1}>
          If you not a natural morning person, there are few things you can make
          eating breakfast a reasonable feat.{" "}
        </Typography>
        <Typography variant="body2">
          Make it ahead of time, you can make you own pancakes and waffles to
          keep in the freezer, just pop one in the toaster for a quick treat.
          Grab and go options like chia pudding or overnight oats are excellent
          for commuting. I even have a recipe for Idli Dosa mix. If you simply
          don't feel like eating, so early in the morning, prepping smoothie
          packs to keep in the freezer is a great idea; that way you slip your
          way to health!
        </Typography>
        <Typography variant="body2">
          Make something irresistible. Thers's no better way to awaken the child
          like excitement than the prospect of waking up to something
          scrumptious.
        </Typography>
        <Typography variant="body2">
          Plan on sharing with someone you love! Accountability buddies are a
          proven way of changing behaviour in a fun and positive way
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Images;
