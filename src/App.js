import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login";

// Admin
import PanelAdmin from "./PanelAdmin";
import Dashboard from "./Dashboard";
import Alerts from "./Alerts";
import Audit from "./Audit";
import Logs from "./Logs";
import Iterations from "./Interations";
import Roles from "./Roles";
import Users from "./Users";
import Organizations from "./Organizations";

// Cliente
import PanelCliente from "./cliente/PanelCliente";
import DashboardCliente from "./cliente/DashboardCliente";
import EntrenarModelo from "./cliente/EntrenarModelo";
import UsarModelo from "./cliente/UsarModelo";
import VerReportes from "./cliente/VerReportes";
import InfoAdicional from "./cliente/InfoAdicional";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      {/* Página de inicio de sesión */}
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />}
      />

      {/* Rutas para el administrador */}
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

      {/* Rutas para el cliente */}
      <Route path="/cliente" element={<PanelCliente />}>
        <Route path="dashboard" element={<DashboardCliente />} />
        <Route path="entrenar" element={<EntrenarModelo />} />
        <Route path="usar" element={<UsarModelo />} />
        <Route path="reportes" element={<VerReportes />} />
        <Route path="informacion" element={<InfoAdicional />} />
      </Route>
    </Routes>
  );
}

export default App;



