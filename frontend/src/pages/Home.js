import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import "./Home.css";

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
  const [instructions, setInstructions] = useState([]);

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
        "https://recipe-finder-backend-alpha.vercel.app/api/search",
        {
          params: { query },
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

  const handleExpandClick = async (recipeId) => {
    try {
      const response = await axios.get(
        "https://recipe-finder-backend-alpha.vercel.app/api/instructions",
        {
          params: { recipe_id: recipeId },
        }
      );
      console.log("API response: ", response.data); // For debugging purposes
      if (response.data.length > 0) {
        setInstructions(response.data[0].steps);
      } else {
        console.error("Unexpected response structure: ", response.data);
        setInstructions([]); // Clear the instructions if the structure is unexpected
      }
    } catch (error) {
      console.error("There was an error fetching the instructions!", error);
      setInstructions([]); // Clear the instructions in case of an error
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
              <Accordion
                key={recipe.id}
                className="card"
                onChange={() => handleExpandClick(recipe.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${recipe.id}-content`}
                  id={`panel${recipe.id}-header`}
                >
                  <Typography variant="h5">{recipe.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <CardContent>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{ width: "100%", borderRadius: "8px" }}
                    />
                    {instructions.length > 0 && (
                      <Box>
                        <Typography variant="h6">Instructions:</Typography>
                        <ul>
                          {instructions.map((step, index) => (
                            <li key={index}>{step.step}</li>
                          ))}
                        </ul>
                      </Box>
                    )}
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Typography variant="h6" sx={{ mt: 2 }}>
              No recipes found.
            </Typography>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Home;
