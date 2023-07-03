import { Grid } from "@mui/material";

import RecipeCard from "./recipeCard";

const RecipeList = ({ recipeArray }) => {
  return (
    <Grid container spacing={3}>
      {recipeArray.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </Grid>
  );
};

export default RecipeList;
