import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledImg = styled("img")({
  width: "100%",
  height: "10rem",
  objectFit: "cover",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
});

const RecipeCard = ({ recipe }) => {
  return (
    <Grid item xs={6} lg={2} md={3} sm={4} sx={{height:'16rem'}}>
      <Paper elevation={2} sx={{height:'100%'}}>
        <Box sx={{ position: "relative", height: "10rem" }}>
          <StyledImg src={recipe.link} loading="lazy" />
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              color: "black",
              backgroundColor: "rgb(227, 225, 220)",
              fontWeight:'bold',
              // fontSize: 10,
              // width: "70px",
              paddingInline: "10px",
              borderRadius: "5px 0 0 0",
            }}
          >
            {recipe.level}{"-"}{recipe.time}{" Mins"}
          </Typography>
        </Box>

        <Box
          paddingX={1}
          marginBottom={0.5}
          sx={{ display: "flex", alignItems: "center", fontSize: 12 }}
        >
          {recipe.minititle === "Vegetarian" ? (
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
              alt="vegetarian-food-symbol"
            />
          ) : (
            <img
              width="15"
              height="15"
              src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
              alt="vegetarian-food-symbol"
            />
          )}
          <Typography
            variant="h6"
            marginLeft={0.5}
            sx={{ fontSize: 12, color: "green" }}
          >
            {<>{recipe.minititle}</>}
          </Typography>
        </Box>

        <Box padding={1}>
          <Typography
            variant="body2"
            sx={{ alignContent: "center", fontWeight: "bold", fontSize: 14 }}
          >
            {recipe.title}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default RecipeCard;
