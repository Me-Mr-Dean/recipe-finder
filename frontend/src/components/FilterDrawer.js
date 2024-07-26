import React, { useContext, useState } from "react";
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
import FilterContext from "../utils/FilterContext";
import "./FilterDrawer.css"; // Import the CSS file for additional styling

const FilterDrawer = ({ open, onClose }) => {
  const { setFilters } = useContext(FilterContext);
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");

  const handleCuisineChange = (event) => {
    setCuisine(event.target.value);
  };

  const handleDietChange = (event) => {
    setDiet(event.target.value);
  };

  const applyFilters = () => {
    setFilters({ cuisine, diet });
    onClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box className="filter-drawer" sx={{ width: 300, p: 2 }}>
        <Typography variant="h6" className="filter-title">
          Filters
        </Typography>
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
        <Button
          variant="contained"
          className="apply-button"
          onClick={applyFilters}
          sx={{ mt: 3 }}
        >
          Apply Filters
        </Button>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
