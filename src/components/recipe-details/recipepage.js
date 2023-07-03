import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  TextField,
  ImageList,
  Button,
  ImageListItem,
  Box,
  Modal,
  Rating,
  Avatar,
  Paper,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { List, ListItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ingredients = [
  "2 tbsp Oil",
  "6-8 Tomatoes,Roughly Chopped",
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
];

const images = [
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
];
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

  const [openCom, setOpenCom] = React.useState(false);
  const handleOpenCom = () => setOpenCom(true);
  const handleCloseCom = () => setOpenCom(false);
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
          to='/create'
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
          Restaurant Style Tomato Soup
          <Rating name="read-only" value={5} readOnly />
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
        <Grid item xs={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // backgroundColor: "whitesmoke",
              borderRadius: 5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              padding: 2,
              height: "100%",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Ingredients:
            </Typography>
            <Box>
              <List
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
                }}
              >
                {ingredients.map((item, index) => (
                  <ListItem key={index}>
                    <Typography>
                      {index + 1}) {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: 2,
              // backgroundColor: "whitesmoke",
              height: "100%",
              width: 300,
              borderRadius: 5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              Recipe Details:
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RestaurantOutlinedIcon sx={{color:'orange'}}/>
              <Typography variant="subtitle1" ml={1}>
                Cuisine: Indian
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SpeedIcon color="error"/>
              <Typography variant="subtitle1" ml={1}>
                Difficulty: Easy
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeFilledOutlinedIcon color="secondary" />
              <Typography variant="subtitle1" ml={1}>
                Time to Make: 30 Mins
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PeopleAltIcon color="primary" />
              <Typography variant="subtitle1" ml={1}>
                Number of Servings: 2
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <WhatshotIcon color="warning"/>
              <Typography variant="subtitle1" ml={1}>
                Calorie: 200
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                alt="vegetarian-food-symbol"
              />
              <Typography variant="subtitle1" ml={1}>
                Veg
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocalOfferIcon color="info"/>
              <Typography variant="subtitle1" ml={1}>
                Quick &amp; Easy
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              paddingY: 3,
              paddingX:5,
              borderRadius: 5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
              {images.slice(0, visibleItems).map((item, index) => (
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
            {images.length > visibleItems && (
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
                    {images.map((item, index) => (
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
        <ol>
          <Typography variant="body1" color="grey" sx={{ fontSize: 20 }}>
            <li>
              In a pressure cooker add oil and chopped tomatoes and saute for a
              minute.
            </li>
            <li>
              Now add Red Chilli powder,Turmeric powder,ginger,Garlic,black
              peppercorns,black cardamom seeds,Salt and water..mix well.
            </li>
            <li>
              In a another kadhai heat oil, butter and add onion saute until
              translucent and add the cooked tomato mixture and cook it for
              another 5-6 mins.
            </li>
            <li>
              Switch off the flame add coriander stems and blend it into a fine
              puree with a hand blender and strain it with a soup strainer.
            </li>
            <li>Pour it back in the kadhai and boil it for 15 minutes.</li>
            <li>
              Finally add sugar and give it a proper mix and switch off the
              flame.
            </li>
            <li>
              Now serve it in a bowl and garnish with cream,prepared
              croutons,tomato slices and corriander leaves.
            </li>
            <li>Your hot tomato soup is ready to serve.</li>
          </Typography>
        </ol>
      </Box>

      <Box sx={{ paddingX: 2 }}>
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
      </Box>

      <Box sx={{ paddingX: 1 }}>
        <IconButton
          onClick={handleOpenCom}
          color="primary"
          aria-label="comment"
          sx={{ display: "flex", gap: 1 }}
        >
          <CommentIcon />
          <Typography variant="body1" color="grey">
            Comment
          </Typography>
        </IconButton>
        <Modal
          open={openCom}
          onClose={handleCloseCom}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              fontWeight="bold"
              minHeight="10vh"
            >
              Comments
            </Typography>
            <Grid item container alignItems="center" spacing={1}>
              <Grid item>
                <Avatar />
              </Grid>
              <Grid item>
                <Typography>Wow!! Ankit Good Recipe</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              spacing={1}
              sx={{ marginTop: "20px" }}
            >
              <Grid item>
                <Avatar />
              </Grid>
              <Grid item>
                <Typography>Great One!! Ankit</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              spacing={1}
              sx={{ marginTop: "20px" }}
            >
              <Grid item>
                <Avatar />
              </Grid>
              <Grid item>
                <Typography>Such a Talent XD</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              spacing={1}
              sx={{ marginTop: "20px" }}
            >
              <Grid item>
                <CommentIcon sx={{ fontSize: 30 }} />
              </Grid>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  label="Comment Here!!!"
                  variant="outlined"
                  sx={{ width: 400 }}
                />
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default RecipePage;
