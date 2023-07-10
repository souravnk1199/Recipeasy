import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

import ServeTimeCal from "./serveTimeCal";

const StyledImg = styled("img")({
  width: "150px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "5px",
});

const TrendingRecipe = ({ recipe }) => {
  return (
    <Paper
      sx={{
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 0.5,
        backgroundColor: "rgba(128, 128, 128, 0.1)",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <StyledImg src={recipe.link} alt={recipe.name} />
      </Box>
      <Typography variant="subtitle1">{recipe.name}</Typography>
      <Typography variant="subtitle2">{recipe.tags.join(" . ")}</Typography>
      <ServeTimeCal
        serve={recipe.persons}
        time={recipe.time}
        cal={recipe.calorie}
      />
      <Typography
        variant="caption"
        sx={{
          // paddingBottom: 1.5,
          paddingX: 1,
          paddingTop: 0.5,
          textAlign: "center",
        }}
      >
        {recipe.description}
      </Typography>
    </Paper>
  );
};

export default TrendingRecipe;
