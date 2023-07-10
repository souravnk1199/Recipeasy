import { Grid } from "@mui/material";

import Hero from "./hero";
import Carousel from "./carousel";

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Hero />
      </Grid>
      <Grid item xs={12}>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default Home;
