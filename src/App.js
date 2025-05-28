import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { auth, provider } from "./firebase";
import "./App.css";

import Login from "./Login";
import PanelAdmin from "./PanelAdmin";
import Alerts from "./Alerts";
import Audit from "./Audit";
import Logs from "./Logs";
import Iterations from "./Interations";
import Roles from "./Roles";
import Users from "./Users";
import Organizations from "./Organizations";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />
        }
      />

      {user && (
        <Route path="/dashboard" element={<PanelAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="organizaciones" element={<Organizations />} />
          <Route path="usuarios" element={<Users />} />
          <Route path="roles" element={<Roles />} />
          <Route path="iteraciones" element={<Iterations />} />
          <Route path="logs" element={<Logs />} />
          <Route path="auditoria" element={<Audit />} />
          <Route path="alertas" element={<Alerts />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;


