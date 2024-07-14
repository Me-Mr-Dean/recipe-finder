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

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <NavigationDrawer />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
