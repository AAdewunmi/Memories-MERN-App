import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
    return (
      <BrowserRouter>
        <Container maxWidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" exact Component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact Component={Home} />
            <Route path="/posts/search" exact Component={Home} />
            <Route path="/posts/id" exact Component={PostDetails} />
            <Route path="/auth" exact Component={Auth} />
          </Routes>
        </Container>
      </BrowserRouter>
    );
}

export default App;