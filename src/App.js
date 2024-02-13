import React from "react";
import "./App.css";
import styled from "styled-components";
import {
  RecipeContainer,
  CoverImage,
  RecipeName,
  Ingredients,
  SeeMoreText,
} from "./components/recipeComponents";
import {
  Header,
  AppNameComponent,
  HumBurger,
  SearchComponent,
  Icons,
  SearchInput,
} from "./components/headerComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15;
  padding: 30px;
  justify-content: space-evenly;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <AppNameComponent>
          <HumBurger src="hamburger-burger.svg" />
          Recipe Finder
        </AppNameComponent>
        <SearchComponent>
          <Icons src="/Vector_search_icon.svg.png" />
          <SearchInput placeholder="Search Recipe" />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src="hamburger-burger.svg" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="https://www.pngarts.com/files/3/Pizza-PNG-Photo.png" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="https://th.bing.com/th/id/OIP.mPNd8mpQMfdg3mxl7NKC1QHaHe?rs=1&pid=ImgDetMain" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="https://th.bing.com/th/id/OIF.0gg7WrwedP6D4MP6068c1g?rs=1&pid=ImgDetMain" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="https://th.bing.com/th/id/OIP.a_ugIW7bPcI4TydHVzPb9wHaFe?rs=1&pid=ImgDetMain" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="hamburger-burger.svg" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="https://th.bing.com/th/id/OIP.euwfuG9Zl0EEapgPlTxiGQHaE8?rs=1&pid=ImgDetMain" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>

        <RecipeContainer>
          <CoverImage src="https://th.bing.com/th/id/OIP.WwN9yOwMIZD_3I7kcmx9zAHaD4?rs=1&pid=ImgDetMain" />
          <RecipeName>Matar Paneer</RecipeName>
          <Ingredients>Ingredients</Ingredients>
          <SeeMoreText>See Complete Recipe</SeeMoreText>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
};

export default App;
