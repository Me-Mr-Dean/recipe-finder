import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { title, image } = location.state || {};
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          "https://recipe-finder-backend-alpha.vercel.app/instructions",
          { params: { recipe_id: id } }
        );
        console.log("API response: ", response.data); // For debugging purposes
        if (response.data.length > 0) {
          setRecipe(response.data[0]);
        } else {
          console.error("Unexpected response structure: ", response.data);
          setRecipe(null); // Clear the recipe if the structure is unexpected
        }
      } catch (error) {
        console.error("There was an error fetching the recipe details!", error);
        setRecipe(null); // Clear the recipe in case of an error
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div
      style={{
        overflow: "auto",
        position: "relative",
        top: "1%",
      }}
    >
      <Box className="recipe-details-container" sx={{ p: 2 }}>
        <Card sx={{ maxWidth: 800, mx: "auto" }}>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              {title}
            </Typography>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <Typography variant="h6">Ingredients:</Typography>
            <ul>
              {recipe.steps[0].ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
              ))}
            </ul>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Preparation Steps:
            </Typography>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default RecipeDetails;
