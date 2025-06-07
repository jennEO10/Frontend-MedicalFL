import React, { useState, useEffect } from "react";
import "./Organizations.css";
import organizationService from "./services/organizationService";

const Organizations = () => {
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
    descripcion: "",
    contacto: ""
  });

  const handleGuardar = () => {
    setData([...data, nuevaOrg]);
    setShowForm(false);
    setNuevaOrg({ nombre: "", descripcion: "", contacto: "" });
  };

  return (
    <div className="org-container">
      <h2>Gestión de Organizaciones</h2>
      <p>Administra las organizaciones participantes en el modelo federado</p>

      <div className="org-table-responsive">
        <table className="org-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Contacto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((org, index) => (
              <tr key={index}>
                <td>{org.name}</td>
                <td>{org.descripcion}</td>
                <td>{org.contacto}</td>
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
            <input
              type="text"
              placeholder="Nombre"
              value={nuevaOrg.nombre}
              onChange={(e) => setNuevaOrg({ ...nuevaOrg, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descripción"
              value={nuevaOrg.descripcion}
              onChange={(e) => setNuevaOrg({ ...nuevaOrg, descripcion: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contacto"
              value={nuevaOrg.contacto}
              onChange={(e) => setNuevaOrg({ ...nuevaOrg, contacto: e.target.value })}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
              <button onClick={() => setShowForm(false)}>Cancelar</button>
              <button onClick={handleGuardar}>Guardar</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setShowForm(true)} style={{ marginTop: "20px" }}>
        ➕ Añadir Organización
      </button>
    </div>
  );
};

export default Organizations;

