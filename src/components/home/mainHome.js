import { Grid } from "@mui/material";

import Hero from "./hero";
import Corousel from "./corousel";

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Hero />
      </Grid>
      <Grid item xs={12}>
        <Corousel />
      </Grid>
    </Grid>
  );
};

export default Home;
