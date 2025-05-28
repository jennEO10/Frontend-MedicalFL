import React from "react";

const Users = () => {
  const usuarios = [
    { nombre: "Juan Pérez", email: "jperez@hospital-universitario.org", organizacion: "Hospital Universitario", rol: "Administrador", estado: "Activo", acceso: "12/05/2025" },
    { nombre: "María López", email: "mlopez@clinica-sanrafael.com", organizacion: "Clínica San Rafael", rol: "Investigador", estado: "Activo", acceso: "11/05/2025" },
    { nombre: "Carlos Rodríguez", email: "crodriguez@hospital-norte.org", organizacion: "Hospital Norte", rol: "Médico", estado: "Activo", acceso: "10/05/2025" },
    { nombre: "Ana Martínez", email: "amartinez@centro-regional.org", organizacion: "Centro Médico Regional", rol: "Técnico", estado: "Inactivo", acceso: "03/05/2025" },
    { nombre: "Roberto Sánchez", email: "rsanchez@clinica-especializada.com", organizacion: "Clínica Especializada", rol: "Analista", estado: "Bloqueado", acceso: "05/05/2025" }
  ];

  const colorEstado = {
    "Activo": { backgroundColor: "#d4edda", color: "#155724" },
    "Inactivo": { backgroundColor: "#fff3cd", color: "#856404" },
    "Bloqueado": { backgroundColor: "#f8d7da", color: "#721c24" }
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
          <button style={btnAgregar}>+ Agregar</button>
        </div>
      </div>

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
                <td style={td}>{user.nombre}</td>
                <td style={td}>{user.email}</td>
                <td style={td}>{user.organizacion}</td>
                <td style={td}>{user.rol}</td>
                <td style={td}><span style={{ ...colorEstado[user.estado], padding: '4px 8px', borderRadius: '10px' }}>{user.estado}</span></td>
                <td style={td}>{user.acceso}</td>
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

export default Users;

