import { Container, Grid } from "@mui/material";

import { styled } from "@mui/system";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

import Header from "./components/home/Header";
import RecipeApp from "./components/home/RecipeApp";
import Corousel from "./components/home/Corousel";

const CustomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.up("xl")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
}));

const App = () => {
  return (
    <>
      <Header />
      <CustomContainer maxWidth={"xl"}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <RecipeApp />
          </Grid>
          <Grid item xs={12}>
            <Corousel />
          </Grid>
        </Grid>
      </CustomContainer>
      <BottomNavigation
        sx={{ backgroundColor: "rgba(128, 128, 128, 0.5)", marginTop: 2 }}
      >
        <BottomNavigationAction icon={<FacebookIcon />} />
        <BottomNavigationAction icon={<TwitterIcon />} />
        <BottomNavigationAction icon={<InstagramIcon />} />
        <BottomNavigationAction icon={<GoogleIcon />} />
      </BottomNavigation>
    </>
  );
};

export default App;
