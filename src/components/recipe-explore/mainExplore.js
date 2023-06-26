import { Grid } from "@mui/material";

import RecipeOfTheDay from "./recipeOfTheDay";
import Images from "./images";

const Explore = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <RecipeOfTheDay/>
      </Grid>
      <Grid item xs={12}>
        <Images/>
      </Grid>
    </Grid>
  )
}

export default Explore;