import React from "react";
import './Organizations.css';

const Organizations = () => {
  const data = [
    { nombre: "Hospital Universitario", tipo: "Institución Pública", usuarios: 12, estado: "Activa", actividad: "12/05/2025", iteraciones: "28/28" },
    { nombre: "Clínica San Rafael", tipo: "Institución Privada", usuarios: 10, estado: "Activa", actividad: "11/05/2025", iteraciones: "27/28" },
    { nombre: "Hospital Norte", tipo: "Institución Pública", usuarios: 9, estado: "Activa", actividad: "10/05/2025", iteraciones: "25/28" },
    { nombre: "Centro Médico Regional", tipo: "Institución Pública", usuarios: 6, estado: "Inactiva", actividad: "03/05/2025", iteraciones: "20/28" },
    { nombre: "Clínica Especializada", tipo: "Institución Privada", usuarios: 11, estado: "Activa", actividad: "09/05/2025", iteraciones: "28/28" },
  ];

  const estadoEstilo = (estado) => {
    return {
      padding: "6px 10px",
      borderRadius: "12px",
      fontSize: "0.85rem",
      backgroundColor: estado === "Activa" ? "#d4edda" : "#f8d7da",
      color: estado === "Activa" ? "#155724" : "#721c24",
      textAlign: "center",
      minWidth: "70px"
    };
  };

  return (
    <div className="org-container">
      <h2>Gestión de Organizaciones</h2>
      <p>Administra las organizaciones participantes en el modelo federado</p>

      <div className="org-controls">
        <input type="text" placeholder="Buscar organización..." className="org-search" />
        <div className="org-filtros">
          <button>Activas</button>
          <button>Inactivas</button>
          <button>Todas</button>
        </div>
        <button className="org-agregar">+ Agregar</button>
      </div>

      <div className="org-table-responsive">
        <table className="org-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Usuarios</th>
              <th>Estado</th>
              <th>Última Actividad</th>
              <th>Iteraciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((org, index) => (
              <tr key={index}>
                <td>{org.nombre}</td>
                <td>{org.tipo}</td>
                <td>{org.usuarios}</td>
                <td><span style={estadoEstilo(org.estado)}>{org.estado}</span></td>
                <td>{org.actividad}</td>
                <td>{org.iteraciones}</td>
                <td>
                  <button className="icon-btn">✏️</button>
                  <button className="icon-btn">🔍</button>
                  <button className="icon-btn">❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="org-pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default Organizations;

