import React, { useState, useEffect } from "react";
import "./Organizations.css";
import organizationService from "./services/organizationService";

const Organizations = () => {
  // const [data, setData] = useState([
  //   { nombre: "Hospital Universitario", tipo: "Institución Pública", usuarios: 12, estado: "Activa", actividad: "12/05/2025", iteraciones: "28/28" },
  //   { nombre: "Clínica San Rafael", tipo: "Institución Privada", usuarios: 10, estado: "Activa", actividad: "11/05/2025", iteraciones: "27/28" },
  //   { nombre: "Hospital Norte", tipo: "Institución Pública", usuarios: 9, estado: "Activa", actividad: "10/05/2025", iteraciones: "25/28" },
  //   { nombre: "Centro Médico Regional", tipo: "Institución Pública", usuarios: 6, estado: "Inactiva", actividad: "03/05/2025", iteraciones: "20/28" },
  //   { nombre: "Clínica Especializada", tipo: "Institución Privada", usuarios: 11, estado: "Activa", actividad: "09/05/2025", iteraciones: "28/28" },
  // ]);

  // Inicializar el estado con datos vacíos
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const organizations = await organizationService.fetchAll();
      setData(organizations);
    };

    fetchData();
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [nuevaOrg, setNuevaOrg] = useState({
    nombre: "",
    tipo: "",
    usuarios: 0,
    estado: "Activa",
    actividad: "--/--/----",
    iteraciones: "0/28"
  });

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

  const handleGuardar = () => {
    setData([...data, nuevaOrg]);
    setShowForm(false);
    setNuevaOrg({ nombre: "", tipo: "", usuarios: 0, estado: "Activa", actividad: "--/--/----", iteraciones: "0/28" });
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
        <button className="org-agregar" onClick={() => setShowForm(true)}>+ Agregar</button>
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

      {showForm && (
        <div className="form-overlay">
          <div className="form-popup">
            <h3>Nueva Organización</h3>
            <input type="text" placeholder="Nombre" value={nuevaOrg.nombre} onChange={(e) => setNuevaOrg({ ...nuevaOrg, nombre: e.target.value })} />
            <input type="text" placeholder="Tipo" value={nuevaOrg.tipo} onChange={(e) => setNuevaOrg({ ...nuevaOrg, tipo: e.target.value })} />
            <input type="number" placeholder="Cantidad de usuarios" value={nuevaOrg.usuarios} onChange={(e) => setNuevaOrg({ ...nuevaOrg, usuarios: parseInt(e.target.value) })} />
            <select value={nuevaOrg.estado} onChange={(e) => setNuevaOrg({ ...nuevaOrg, estado: e.target.value })}>
              <option value="Activa">Activa</option>
              <option value="Inactiva">Inactiva</option>
            </select>
            <input type="text" placeholder="Iteraciones (ej. 5/28)" value={nuevaOrg.iteraciones} onChange={(e) => setNuevaOrg({ ...nuevaOrg, iteraciones: e.target.value })} />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
              <button onClick={() => setShowForm(false)}>Cancelar</button>
              <button onClick={handleGuardar}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Organizations;
