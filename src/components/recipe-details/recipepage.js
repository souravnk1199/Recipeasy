import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  ImageList,
  Button,
  ImageListItem,
  Box,
  Modal,
  Rating,
  Paper,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CloseIcon from "@mui/icons-material/Close";

import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import Comments from "./comments";

const recipe = {
  title: "Restaurant Style Tomato Soup",
  rating: 5,
  ingredients: [
    "2 tbsp Oil",
    "6-8 Tomatoes, Roughly Chopped",
    "1 tbsp Red Chilli Powder",
    "1 tbsp Turmeric Powder",
    "2 inch Ginger",
    "1 Big Garlic Clove",
    "10 Black PepperCorns",
    "1 Black Cardamom Seeds",
    "Salt to taste",
    "Water as Required",
    "1 Cup Coriander Stems",
    "2 tbsp Sugar",
  ],
  steps: [
    "In a pressure cooker add oil and chopped tomatoes and saute for a minute.",
    "Now add Red Chilli powder, Turmeric powder, ginger, Garlic, black peppercorns, black cardamom seeds, Salt and water..mix well.",
    "In another kadhai heat oil, butter and add onion saute until translucent and add the cooked tomato mixture and cook it for another 5-6 mins.",
    "Switch off the flame add coriander stems and blend it into a fine puree with a hand blender and strain it with a soup strainer.",
    "Pour it back in the kadhai and boil it for 15 minutes.",
    "Finally add sugar and give it a proper mix and switch off the flame.",
    "Now serve it in a bowl and garnish with cream, prepared croutons, tomato slices and coriander leaves.",
    "Your hot tomato soup is ready to serve.",
  ],
  images: [
    "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Tomato-Soup-Recipe-Video.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/tomato-soup-recipe.jpg",
    "https://avirtualvegan.com/wp-content/uploads/2022/08/Tomato-Basil-Soup-A-Virtual-Vegan-2.jpg",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Homemade-Tomato-Soup-Recipe.jpg",
    "https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Tomato-Soup-Thumbnail.jpg",
    "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Tomato-Soup-Recipe-Video.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/tomato-soup-recipe.jpg",
    "https://avirtualvegan.com/wp-content/uploads/2022/08/Tomato-Basil-Soup-A-Virtual-Vegan-2.jpg",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2022/02/Homemade-Tomato-Soup-Recipe.jpg",
    "https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Tomato-Soup-Thumbnail.jpg",
    "https://lh3.googleusercontent.com/A0RvyVt72_kKo6L3eMU6MphrV0OLQ9iIlwyLjZ12d0iaBDfl2x6Mb0YKtXSsFNiWewscliWNrE3Enm2NqdM0SrS9dnVHN3gj61w=w1400-h1400-c-rj-v1-e365",
    "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Tomato-Soup-Recipe-Video.jpg",
  ],
  cuisine: "Indian",
  difficulty: "Easy",
  timeToMake: "30",
  numberOfServings: 2,
  calories: 200,
  isVeg: true,
  tags: "Quick & Easy",
};

const RecipePage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const [showModal, setShowModal] = useState(false);
  // const [visibleItems, setVisibleItems] = useState(6);
  const visibleItems = 6;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewAll = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const [value, setValue] = React.useState(2);

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={5}
      >
        <IconButton
          component={Link}
          to="/create"
          sx={{
            color: "darkorange",
            gap: 1,
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <AddCircleIcon fontSize="large" />
          <Typography variant="h6" color="grey">
            Create your own
          </Typography>
        </IconButton>
        <Typography
          variant="h4"
          fontWeight="bold"
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={2}
        >
          {recipe.title}
          <Rating name="read-only" value={recipe.rating} readOnly />
        </Typography>

        <Box>
          <Box display={"flex"} flexDirection={"row"}>
            <IconButton color="gray" onClick={handleLikeClick}>
              {isLiked ? (
                <ThumbUpAltIcon fontSize="large" sx={{ color: "darkorange" }} />
              ) : (
                <ThumbUpOffAltIcon
                  fontSize="large"
                  sx={{ color: "darkorange" }}
                />
              )}
            </IconButton>

            <IconButton color="gray" onClick={handleBookmarkClick}>
              {isBookmarked ? (
                <BookmarkIcon fontSize="large" sx={{ color: "darkorange" }} />
              ) : (
                <BookmarkBorderIcon
                  fontSize="large"
                  sx={{ color: "darkorange" }}
                />
              )}
            </IconButton>
          </Box>

          <Typography variant="body2" component="span" color="grey" ml={0.5}>
            1,789k
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              padding: 2,
              height: "100%",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Ingredients:
            </Typography>
            <Box
              sx={{
                height: 400,
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "transparent",
                  borderRadius: "3px",
                  transition: "background-color 0.3s",
                },
                "&:hover::-webkit-scrollbar-thumb": {
                  backgroundColor: "darkgrey",
                },
                "& li": {
                  listStyleType: "disc",
                  fontSize: "1.5rem",
                },
              }}
            >
              <Box component="ul">
                {recipe.ingredients.map((item, index) => (
                  <Box component="li" key={index} sx={{ paddingY: 1.1 }}>
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: 2,
              height: "100%",
              borderRadius: 5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Recipe Details:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RestaurantOutlinedIcon sx={{ color: "orange" }} />
              <Typography variant="subtitle1" ml={1}>
                Cuisine: {recipe.cuisine}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SpeedIcon color="error" />
              <Typography variant="subtitle1" ml={1}>
                Difficulty: {recipe.difficulty}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeFilledOutlinedIcon color="secondary" />
              <Typography variant="subtitle1" ml={1}>
                Time to Make: {recipe.timeToMake}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PeopleAltIcon color="primary" />
              <Typography variant="subtitle1" ml={1}>
                Number of Servings: {recipe.numberOfServings}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <WhatshotIcon color="warning" />
              <Typography variant="subtitle1" ml={1}>
                Calorie: {recipe.calories}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {!recipe.isVeg ? (
                <>
                  <img
                    width="25"
                    height="25"
                    src={require("../assets/veg-symbol.png")}
                    alt="vegetarian-food-symbol"
                  />
                  <Typography variant="subtitle1" ml={1}>
                    Veg
                  </Typography>
                </>
              ) : (
                <>
                  <img
                    width="25"
                    height="25"
                    src={require("../assets/nonveg-symbol.png")}
                    alt="non-vegetarian-food-symbol"
                  />
                  <Typography variant="subtitle1" ml={1}>
                    NonVeg
                  </Typography>
                </>
              )}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalOfferIcon color="info" />
              <Typography variant="subtitle1" ml={1}>
                {recipe.tags}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              paddingY: 3,
              paddingX: 5,
              borderRadius: 5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
              {recipe.images.slice(0, visibleItems).map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={item}
                    loading="lazy"
                    alt={` ${index + 1}`}
                    onClick={(item) => handleImageClick(item)}
                    style={{ borderRadius: "5px" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
            {recipe.images.length > visibleItems && (
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "darkorange",
                  borderRadius: "2rem",
                  alignSelf: "center",
                  "&:hover": {
                    backgroundColor: "orange",
                  },
                }}
                onClick={handleViewAll}
              >
                View All
              </Button>
            )}
            <Modal
              open={showModal}
              onClose={handleCloseModal}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>
                {selectedImage ? (
                  <div style={{ position: "relative" }}>
                    <img
                      src={selectedImage}
                      alt="recipe"
                      style={{
                        width: "50vw",
                        height: "70vh",
                      }}
                    />
                    <IconButton
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setSelectedImage(null)}
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "white",
                        color: "black",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ) : (
                  <ImageList
                    sx={{
                      padding: "10px",
                      width: "50vw",
                      height: "70vh",
                      backgroundColor: "whitesmoke",
                      overflow: "auto",
                      "&::-webkit-scrollbar": {
                        width: "5px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "transparent",
                        borderRadius: "3px",
                        transition: "background-color 0.3s",
                      },
                      "&:hover::-webkit-scrollbar-thumb": {
                        backgroundColor: "darkorange",
                      },
                    }}
                    cols={3}
                  >
                    {recipe.images.map((item, index) => (
                      <ImageListItem key={index}>
                        <img
                          src={item}
                          loading="lazy"
                          alt={`${index + 1}`}
                          onClick={() => handleImageClick(item)}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                )}
              </div>
            </Modal>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ marginY: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ paddingLeft: 2 }}>
          Process:
        </Typography>
        <Box
          component="ul"
          sx={{
            "& li": {
              listStyleType: "disc",
              fontSize: "1.5rem",
            },
          }}
        >
          {recipe.steps.map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{ paddingY: 0.5, color: "#5e5d5c" }}
            >
              <Typography variant="h6" sx={{ fontWeight: "normal" }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          paddingX: 2,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Rate the Recipe
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography variant="h6">
          Tell us what you liked about this Recipe
        </Typography>
        <Comments />
      </Box>
    </Box>
  );
};

export default RecipePage;
