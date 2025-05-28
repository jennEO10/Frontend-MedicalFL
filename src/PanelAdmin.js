import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const PanelAdmin = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px", flex: 1 }}>
        <Outlet />
        <button
          style={{ marginTop: "20px" }}
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default PanelAdmin;

