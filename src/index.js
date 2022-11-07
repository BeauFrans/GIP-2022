import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import NotLoggedIn from "./routes/NotLoggedIn";
import Reset from "./routes/Reset";
import Signup from "./routes/Signup";

import "./styles/index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/not-logged-in" element={<NotLoggedIn />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
