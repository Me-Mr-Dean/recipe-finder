import React from "react";
import {
  Drawer,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const FilterDrawer = ({ open, onClose }) => {
  const [cuisine, setCuisine] = React.useState("");
  const [diet, setDiet] = React.useState("");

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleDietChange = (event) => {
    setDiet(event.target.value);
  };

  const applyFilters = () => {
    // Implement the logic to apply filters
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 250, p: 2 }}>
        <Typography variant="h6">Filters</Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Cuisine</InputLabel>
          <Select value={cuisine} onChange={handleCuisineChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Italian">Italian</MenuItem>
            <MenuItem value="Chinese">Chinese</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel>Diet</InputLabel>
          <Select value={diet} onChange={handleDietChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Vegetarian">Vegetarian</MenuItem>
            <MenuItem value="Vegan">Vegan</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={applyFilters}>
          Apply Filters
        </Button>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
