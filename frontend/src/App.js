import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer";
import FilterDrawer from "./components/FilterDrawer";
import "./App.css";

function App() {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleFilterOpen = () => {
    setFilterOpen(true);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" className="AppBar">
        <Toolbar className="Toolbar">
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe Finder
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleFilterOpen}
            aria-label="filter"
          >
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className="app-container" sx={{ padding: 0, marginTop: 8 }}>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Container>
      <FilterDrawer open={filterOpen} onClose={handleFilterClose} />
      <Footer />
    </Router>
  );
}

export default App;
