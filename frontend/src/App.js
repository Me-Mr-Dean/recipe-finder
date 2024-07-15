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
import "./App.css"; // Ensure you import your CSS file

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static" className="AppBar">
        <Toolbar className="Toolbar">
          <NavigationDrawer />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="app-container" sx={{ padding: 0 }}>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
}

export default App;
