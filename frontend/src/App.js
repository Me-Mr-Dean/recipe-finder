import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
//import RecipePage from './pages/RecipePage';
//import AddRecipePage from './pages/AddRecipePage';
//import FavoritesPage from './pages/FavoritesPage';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginDialog from "./components/LoginDialog";
import { auth } from "./firebaseConfig";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/*
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        */}
      </Routes>
      <Footer />
      {!authenticated && <LoginDialog />}
    </Router>
  );
};

export default App;

//import logo from './logo.svg';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;
