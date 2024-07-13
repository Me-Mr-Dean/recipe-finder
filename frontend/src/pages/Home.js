import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Home = () => {
  return (
    <Container>
      <h2>Home</h2>
      <p>Welcome to the Recipe Finder!</p>
    </Container>
  );
};

export default Home;
