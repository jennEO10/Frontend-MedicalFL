import React, { useState } from "react";

const Roles = () => {
  const [rolActual, setRolActual] = useState("Investigador");

  const permisos = {
    "Módulo de Organizaciones": [
      "Ver organizaciones",
      "Editar organizaciones",
      "Crear organizaciones"
    ],
    "Módulo de Iteraciones": [
      "Ver iteraciones",
      "Iniciar iteración",
      "Detener iteración",
      "Configurar parámetros"
    ],
    "Módulo de Datos": [
      "Ver resultados globales",
      "Ver estadísticas locales",
      "Exportar datos",
      "Configurar métricas"
    ]
  };

  const permisosActivos = {
    "Ver organizaciones": true,
    "Editar organizaciones": false,
    "Crear organizaciones": false,
    "Ver iteraciones": true,
    "Iniciar iteración": true,
    "Detener iteración": true,
    "Configurar parámetros": true,
    "Ver resultados globales": true,
    "Ver estadísticas locales": true,
    "Exportar datos": true,
    "Configurar métricas": true
  };

  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%" }}>
      <h2 style={{ marginBottom: "10px" }}>Gestión de Roles</h2>
      <p style={{ marginBottom: "20px" }}>Actualiza y asigna los roles a los usuarios de la aplicación</p>

      <div style={{ background: "#f8f8f8", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ marginBottom: "20px" }}>Detalle del Rol: {rolActual}</h3>

        {Object.entries(permisos).map(([modulo, acciones], i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h4 style={{ marginBottom: "10px" }}>{modulo}</h4>
            {acciones.map((accion, j) => (
              <label key={j} style={{ display: "block", marginBottom: "8px" }}>
                <input
                  type="checkbox"
                  checked={permisosActivos[accion]}
                  readOnly
                  style={{ marginRight: "10px" }}
                />
                {accion}
              </label>
            ))}
          </div>
        ))}

        <div style={{ display: "flex", gap: "10px" }}>
          <button style={btnSec}>Cancelar</button>
          <button style={btnPri}>Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
};

const btnPri = {
  padding: "10px 20px",
  backgroundColor: "#6c63ff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const btnSec = {
  padding: "10px 20px",
  backgroundColor: "#eee",
  color: "#333",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default Roles;