import { Grid } from "@mui/material";

import RecipeOfTheDay from "./recipeOfTheDay";
import RecipeBox from "./recipeBox";

const Explore = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RecipeOfTheDay/>
      </Grid>
      <Grid item xs={12}>
        <RecipeBox/>
      </Grid>
    </Grid>
  )
}

export default Explore;