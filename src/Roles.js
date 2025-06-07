import React, { useEffect, useState } from "react";


const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [permisosDisponibles, setPermisosDisponibles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [nuevoRol, setNuevoRol] = useState({ name: "", permisos: [] });

  useEffect(() => {
    fetchRoles();
    fetchPermisos();
  }, []);

  const fetchRoles = () => {
    fetch("https://graphic-brook-404722.uc.r.appspot.com/api/listar-roles")
      .then(res => res.json())
      .then(data => setRoles(data))
      .catch(err => console.error("Error al cargar roles:", err));
  };

  const fetchPermisos = () => {
    fetch("https://graphic-brook-404722.uc.r.appspot.com/api/listar-permisos")
      .then(res => res.json())
      .then(data => setPermisosDisponibles(data))
      .catch(err => console.error("Error al cargar permisos:", err));
  };

  const handleCrear = () => {
    fetch("https://graphic-brook-404722.uc.r.appspot.com/api/crear-rol", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nuevoRol.name,
        permisos: nuevoRol.permisos
      })
    })
      .then(res => res.json())
      .then(() => {
        fetchRoles();
        setShowForm(false);
        setNuevoRol({ name: "", permisos: [] });
      })
      .catch(err => console.error("Error al crear rol:", err));
  };

  const handleEliminar = (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este rol?")) return;
    fetch(`https://graphic-brook-404722.uc.r.appspot.com/api/eliminar-rol/${id}`, {
      method: "DELETE"
    })
      .then(() => fetchRoles())
      .catch(err => console.error("Error al eliminar rol:", err));
  };

  const handleCheckbox = (permisoId) => {
    setNuevoRol((prev) => {
      const yaTiene = prev.permisos.includes(permisoId);
      return {
        ...prev,
        permisos: yaTiene
          ? prev.permisos.filter(p => p !== permisoId)
          : [...prev.permisos, permisoId]
      };
    });
  };

  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%" }}>
      <h2>Gestión de Roles</h2>
      <p>Administra los roles y permisos de acceso</p>

      <button style={btnAgregar} onClick={() => setShowForm(true)}>+ Crear Rol</button>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f0f0f0" }}>
            <th style={th}>Nombre del Rol</th>
            <th style={th}>Permisos</th>
            <th style={th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((rol) => (
            <tr key={rol.id}>
              <td style={td}>{rol.name}</td>
              <td style={td}>{rol.permisos?.join(", ") || "Sin permisos"}</td>
              <td style={td}>
                <button onClick={() => handleEliminar(rol.id)} style={iconBtn}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showForm && (
        <div className="form-overlay" onClick={() => setShowForm(false)}>
          <div className="form-popup" onClick={e => e.stopPropagation()}>
            <h3>Nuevo Rol</h3>
            <input
              type="text"
              placeholder="Nombre del rol"
              value={nuevoRol.name}
              onChange={(e) => setNuevoRol({ ...nuevoRol, name: e.target.value })}
            />

            <div>
              <h4>Permisos</h4>
              <div style={{ maxHeight: "150px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {permisosDisponibles.map((permiso) => (
                  <label key={permiso.id} style={{ display: "block" }}>
                    <input
                      type="checkbox"
                      checked={nuevoRol.permisos.includes(permiso.id)}
                      onChange={() => handleCheckbox(permiso.id)}
                    />
                    {" "}{permiso.nombre}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
              <button onClick={() => setShowForm(false)}>Cancelar</button>
              <button onClick={handleCrear}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos inline
const th = {
  padding: "12px",
  borderBottom: "2px solid #ccc",
  textAlign: "left"
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee"
};

const btnAgregar = {
  backgroundColor: "#6c63ff",
  color: "white",
  padding: "6px 14px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer"
};

const iconBtn = {
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  color: "red"
};

export default Roles;
