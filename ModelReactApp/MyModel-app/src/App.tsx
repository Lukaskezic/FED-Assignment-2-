import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import Model from "./Pages/ModelPage";
import Manager from "./Pages/ManagerPage";
import NotAuthorized from "./Pages/AuthorizationDenied";
import Layout from "./Layout/Layout";
import "./index.css";
import { SetupInterceptors } from "./APIs/Utilities";
import RequireAuthentication from "./Authentication/RequireAuthentication";
import React from "react";

const App = () => 
{
  SetupInterceptors();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* unprotected routes for login and unautharozition pages */}
        <Route path="login" element={<Login />} />
        <Route path="notauthorized" element={<NotAuthorized />} />

        {/* protected routes for manager and model roles */}
        <Route element={<RequireAuthentication allowedRoles={["Model"]} />}>
          <Route path="model" element={<Model />} />
        </Route>

        <Route element={<RequireAuthentication allowedRoles={["Manager"]} />}>
          <Route path="manager" element={<Manager />} />
        </Route>

      </Route>
    </Routes>
  );
};

export default App;
