import React, { useState, useEffect } from "react";
import "./Organizations.css";
import organizationService from "./services/organizationService";

const Organizations = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  const fetchData = async () => {
    try {
      const organizations = await organizationService.fetchAll();
      setData(organizations);
    } catch (error) {
      console.error("Error al cargar organizaciones:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [orgToUpdate, setOrgToUpdate] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [orgToDelete, setOrgToDelete] = useState(null);
  const [nuevaOrg, setNuevaOrg] = useState({
    id: null,
    name: "",
    descripcion: "",
    contacto: ""
  });

  const handleGuardar = async () => {
    console.log("Guardando nueva organización:", nuevaOrg);
    try {
      const response = await organizationService.saveOrganization(nuevaOrg);
      await fetchData();
      setShowForm(false);
      setNuevaOrg({ id: null, name: "", descripcion: "", contacto: "" });
    } catch (error) {
      console.error("Error en guardar:", error);
      alert("No se pudo guardar. Verifica la conexión o los datos.");
    }
    // setData([...data, nuevaOrg]);
    // setShowForm(false);
    // setNuevaOrg({ nombre: "", descripcion: "", contacto: "" });
  };

  const handleEditClick = (org) => {
    setOrgToUpdate(org); // org ya contiene name, descripcion, contacto
    setShowEditForm(true);
  };

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setOrgToUpdate(null);
  };

  const handleDeleteClick = (org) => {
    setOrgToDelete(org);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await organizationService.delOrganization(orgToDelete.id);
      handleCancelDelete();
      await fetchData();
    } catch (error) {
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
        message = error.response.data.message;
      } else {
        console.error("Error interno del frontend:", error.message);
        message = error.message;
      }
      alert("No se pudo cancelar la organización. Error: " + message);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setOrgToDelete(null);
  };


  const handleGuardarEdicion = async () => {
    try {
      console.log("Guardando edición de organización:", orgToUpdate);
      await organizationService.actualizarOrganization(orgToUpdate.id, orgToUpdate); // enviar id y objeto
      handleCancelEdit();
      await fetchData();
    } catch (error) {
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
        alert("No se pudo editar la organización. Error: " + error.response.data.message);
      } else {
        console.error("Error interno del frontend:", error.message);
        alert("No se pudo editar la organización. Error: " + error.message);
      }
    }
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      await fetchData(); // muestra todo si está vacío
      return;
    }

    try {
      const result = await organizationService.searchOrganization(value);
      setData(result);
    } catch (error) {
      console.error("Error al buscar organización:", error);
      setData([]); // limpia tabla si falla
    }
  };


  return (
    <div className="org-container">
      <h2>Gestión de Organizaciones</h2>
      <p>Administra las organizaciones participantes en el modelo federado</p>

      <div className="org-controls">
        <input
          type="text"
          placeholder="Buscar organización por nombre..."
          className="org-search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>


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
                  <button className="icon-btn" onClick={() => handleEditClick(org)}>✏️</button>
                  <button className="icon-btn" onClick={() => handleDeleteClick(org)}>🔍</button>
                  <button className="icon-btn" onClick={() => handleDeleteClick(org)}>❌</button>
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
              value={nuevaOrg.name}
              onChange={(e) => setNuevaOrg({ ...nuevaOrg, name: e.target.value })}
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

      {showEditForm && (
        <div className="form-overlay">
          <div className="form-popup">
            <h3>Editar Organización</h3>
            <input
              type="text"
              placeholder="Nombre"
              value={orgToUpdate.name}
              onChange={(e) => setOrgToUpdate({ ...orgToUpdate, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descripción"
              value={orgToUpdate.descripcion}
              onChange={(e) => setOrgToUpdate({ ...orgToUpdate, descripcion: e.target.value })}
            />
            <input
              type="text"
              placeholder="Contacto"
              value={orgToUpdate.contacto}
              onChange={(e) => setOrgToUpdate({ ...orgToUpdate, contacto: e.target.value })}
            />

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleCancelEdit}>Cancelar</button>
              <button onClick={handleGuardarEdicion}>Guardar Cambios</button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="form-overlay">
          <div className="form-popup">
            <h3>Confirmar Eliminación</h3>
            <p>¿Deseas eliminar la organización <strong>{orgToDelete?.name}</strong>?</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
              <button onClick={handleCancelDelete}>Cancelar</button>
              <button onClick={handleConfirmDelete} style={{ backgroundColor: "#e74c3c", color: "white" }}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Organizations;

