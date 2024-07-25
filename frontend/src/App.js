import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" className="AppBar">
        <Toolbar className="Toolbar">
          <NavigationDrawer />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe Finder
          </Typography>
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
      <Footer /> {/* Add the Footer component */}
    </Router>
  );
}

export default App;
