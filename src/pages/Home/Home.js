import React from "react";

import ItemsListContainer from "../../components/ItemsListContainer/ItemsListContainer";

import Container from "@mui/material/Container";

const Home = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <ItemsListContainer />
      </Container>
    </div>
  );
};

export default Home;
