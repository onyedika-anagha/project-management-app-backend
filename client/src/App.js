import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import SignIn from "./routes/authentications/signin.component";
import SignUp from "./routes/authentications/signup.component";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}

export default App;
