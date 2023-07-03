import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

import Header from "./components/home/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/mainHome";
import Explore from "./components/recipe-explore/mainExplore";
import CreateRecipeNew from "./components/forms/CreateRecipe";
import RecipePage from "./components/recipe-details/recipepage";

const CustomContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  flex: 1,
}));

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <CustomContainer maxWidth={"xl"}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/explore" element={<Explore />}></Route>
            <Route path="/create" element={<CreateRecipeNew />}></Route>
            <Route path="/Recipe" element={<RecipePage />}></Route>
          </Routes>
        </CustomContainer>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;
