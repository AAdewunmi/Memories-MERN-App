import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
    return (
      <BrowserRouter>
        <Container maxWidth="lg">
          <Navbar />
            
          <Home />
        </Container>
      </BrowserRouter>
    );
}

export default App;