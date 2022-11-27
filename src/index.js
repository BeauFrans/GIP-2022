import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ExistingEvaluations from "./routes/ExistingEvaluations";
import Home from "./routes/Home";
import Login from "./routes/Login";
import MakeEvaluation from "./routes/MakeEvaluation";
import MyClasses from "./routes/MyClasses";
import NotLoggedIn from "./routes/NotLoggedIn";
import Reset from "./routes/Reset";
import Results from "./routes/Results";
import SettingsAccount from "./routes/SettingsAccount";
import Signup from "./routes/Signup";

import "./styles/index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/existingevaluations" element={<ExistingEvaluations />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/make-evaluation" element={<MakeEvaluation />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/myclasses" element={<MyClasses />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/results" element={<Results />} />
      <Route path="/settingsaccount" element={<SettingsAccount />} />
      <Route path="/not-logged-in" element={<NotLoggedIn />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
