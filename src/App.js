import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";

// import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
