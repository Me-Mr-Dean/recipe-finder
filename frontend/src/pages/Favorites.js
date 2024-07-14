import React from "react";
import { Box, Typography } from "@mui/material";

const Favorites = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Favorites
      </Typography>
      {/* Add your favorite recipes content here */}
    </Box>
  );
};

export default Favorites;
