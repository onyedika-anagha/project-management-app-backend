import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./routes/dashboard/dashboard.component";
import SignIn from "./routes/authentications/signin.component";
import SignUp from "./routes/authentications/signup.component";
import "./assets/css/style.css";
import InitialState from "./utils/initial-state/initial-state";

function App() {
  return (
    <>
      <InitialState />

      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
