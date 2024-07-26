import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import FilterContext from "../utils/FilterContext";

const images = [
  "url('/Images/Background1.jpg')",
  "url('/Images/Background2.jpg')",
  "url('/Images/Background3.jpg')",
  "url('/Images/Background4.jpg')",
  "url('/Images/Background5.jpg')",
  "url('/Images/Background6.jpeg')",
  // Add more images as needed
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const { filters } = useContext(FilterContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Interval for image changes
    return () => clearInterval(interval);
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://recipe-finder-backend-alpha.vercel.app/search",
        {
          params: {
            query,
            cuisine: filters.cuisine,
            diet: filters.diet,
          },
        }
      );
      console.log("API response: ", response.data); // For debugging purposes
      if (Array.isArray(response.data)) {
        setRecipes(response.data);
      } else {
        console.error("Unexpected response structure: ", response.data);
        setRecipes([]); // Clear the recipes if the structure is unexpected
      }
    } catch (error) {
      console.error("There was an error fetching the recipes!", error);
      setRecipes([]); // Clear the recipes in case of an error
    }
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        height: "100vh", // Adjust as needed
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: images[currentImageIndex],
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        className="search-box"
        sx={{ display: "flex", alignItems: "center", mt: 2 }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            borderRadius: "25px !important",
            backgroundColor: "white",
            flexGrow: 1,
            marginRight: 1,
          }}
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: "25px",
            backgroundColor: "#1976d2",
            color: "white",
            padding: "10px 20px",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box className="recipes-container">
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Link
                to={`/recipe/${recipe.id}`}
                state={{ title: recipe.title, image: recipe.image }}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "90%",
                }}
                key={recipe.id}
              >
                <Card
                  className="card"
                  sx={{
                    cursor: "pointer",
                    width: "100%",
                    maxWidth: 600,
                    mb: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {recipe.title}
                    </Typography>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <Typography variant="h6" sx={{ mt: 2 }}></Typography>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Home;
