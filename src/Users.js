import React, { useEffect, useState } from "react";

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); // <-- Nuevo estado
  const [nuevoUsuario, setNuevoUsuario] = useState({
    username: "",
    mail: "",
    organizationId: "",
    rolesId: [""]
  });

  const colorEstado = {
    true: { backgroundColor: "#d4edda", color: "#155724" },
    false: { backgroundColor: "#f8d7da", color: "#721c24" }
  };

  useEffect(() => {
    fetch('https://graphic-brook-404722.uc.r.appspot.com/api/listar-usuarios')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then(data => {
        setUsuarios(data);
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error);
        setError("No se pudieron cargar los usuarios.");
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario(prev => ({
      ...prev,
      [name]: name === "rolesId" ? [value] : value
    }));
  };

  const handleAgregarUsuario = () => {
    console.log("Nuevo usuario a agregar:", nuevoUsuario);
    setShowForm(false); // Cierra el formulario
    // Aquí iría la lógica para enviar al backend si lo necesitas
  };

  return (
    <div style={{ padding: '30px', background: '#fff', borderRadius: '10px', width: '100%' }}>
      <h2>Gestión de Usuarios</h2>
      <p>Administra los usuarios que acceden a la plataforma federada</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="text" placeholder="Buscar usuario..." style={campoTexto} />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
          <button style={botonActivo}>Activos</button>
          <button style={boton}>Inactivos</button>
          <button style={boton}>Bloqueados</button>
          <button style={boton}>Todos</button>
          <button style={btnAgregar} onClick={() => setShowForm(true)}>+ Agregar</button>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* FORMULARIO EMERGENTE */}
      {showForm && (
        <div style={formOverlay}>
          <div style={formContainer}>
            <h3>Agregar nuevo usuario</h3>
            <input type="text" name="username" placeholder="Nombre" style={formInput} onChange={handleInputChange} />
            <input type="email" name="mail" placeholder="Correo" style={formInput} onChange={handleInputChange} />
            <input type="text" name="organizationId" placeholder="Organización" style={formInput} onChange={handleInputChange} />
            <input type="text" name="rolesId" placeholder="Rol ID" style={formInput} onChange={handleInputChange} />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button style={boton} onClick={() => setShowForm(false)}>Cancelar</button>
              <button style={botonActivo} onClick={handleAgregarUsuario}>Guardar</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Nombre</th>
              <th style={th}>Email</th>
              <th style={th}>Organización</th>
              <th style={th}>Rol</th>
              <th style={th}>Estado</th>
              <th style={th}>Último Acceso</th>
              <th style={th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, i) => (
              <tr key={i}>
                <td style={td}>{user.username}</td>
                <td style={td}>{user.mail}</td>
                <td style={td}>Org #{user.organizationId}</td>
                <td style={td}>Rol #{user.rolesId[0]}</td>
                <td style={td}>
                  <span style={{ ...colorEstado[user.enabled], padding: '4px 8px', borderRadius: '10px' }}>
                    {user.enabled ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td style={td}>--/--/----</td>
                <td style={td}>
                  <button style={iconBtn}>✏️</button>
                  <button style={iconBtn}>🔍</button>
                  <button style={iconBtn}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Estilos
const th = {
  padding: "12px",
  borderBottom: "2px solid #ccc",
  textAlign: "left"
};

const td = {
  padding: "12px"
};

const campoTexto = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  flex: 1,
  minWidth: "200px"
};

const boton = {
  padding: "6px 12px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#eee",
  cursor: "pointer"
};

const botonActivo = {
  ...boton,
  backgroundColor: "#6c63ff",
  color: "white"
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
  marginRight: "6px",
  cursor: "pointer"
};

const formOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000
};

const formContainer = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const formInput = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

export default Users;
