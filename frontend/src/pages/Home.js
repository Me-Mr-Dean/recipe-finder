import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import "./Home.css";

const images = [
  "url('/Images/Background1.jpg')",
  "url('/Images/Background2.jpg')",
  "url('/Images/Background3.jpg')",
  // Add more images as needed
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Interval for image changes
    return () => clearInterval(interval);
  }, []);

  console.log("Current Image Index:", currentImageIndex); // Debugging

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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        className="search-box"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          variant="outlined"
          placeholder="Search for recipes..."
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
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
