import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import SidebarCliente from "./SidebarCliente"; // tu barra lateral cliente
import DashboardCliente from "./DashboardCliente"; // vista inicial del cliente
import EntrenarModelo from "./EntrenarModelo";
import UsarModelo from "./UsarModelo";
import VerReportes from "./VerReportes";
import InfoAdicional from "./InfoAdicional";

const PanelCliente = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidebarCliente />
      <div style={{ padding: "30px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardCliente />} />
          <Route path="entrenar" element={<EntrenarModelo />} />
          <Route path="usar" element={<UsarModelo />} />
          <Route path="reportes" element={<VerReportes />} />
          <Route path="informacion" element={<InfoAdicional />} />
        </Routes>
      </div>
    </div>
  );
};

export default PanelCliente;
