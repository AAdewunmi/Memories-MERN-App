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
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/auth" exact Component={Auth} />
          </Routes>
          <Home />
        </Container>
      </BrowserRouter>
    );
}

export default App;