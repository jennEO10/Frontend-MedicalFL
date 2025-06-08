import React, { useEffect, useState } from "react";
import userService from "./services/usersService";
import rulesService from "./services/rulesService";
import organizationService from "./services/organizationService";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"; // Asegúrate de tener heroicons o íconos similares

const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [roles, setRoles] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); // <-- Nuevo estado
  const [nuevoUsuario, setNuevoUsuario] = useState({
    id: 0,
    username: "",
    password: "",
    enabled: true,
    mail: "",
    organizationId: 0,
    rolesId: []
  });

  const colorEstado = {
    true: { backgroundColor: "#d4edda", color: "#155724" },
    false: { backgroundColor: "#f8d7da", color: "#721c24" }
  };

  const data = async () => {
    try {
      const usuarios = await userService.getAllUsers();
      console.log("Usuarios obtenidos:", usuarios);

      const rules = await rulesService.getAllRules();
      console.log("Roles obtenidos:", rules);

      const organizations = await organizationService.fetchAll();
      console.log("Organizaciones obtenidas:", organizations);

      setUsuarios(usuarios);
      setRoles(rules);
      setOrganizations(organizations);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error.message);
      console.error('Error al obtener los roles:', error.message);
      setError("No se pudieron cargar los usuarios.");
    }
  };

  useEffect(() => {
    data();
  }, []);

  const reiniciarFormulario = () => {
    setNuevoUsuario({
      id: 0,
      username: "",
      password: "",
      enabled: true,
      mail: "",
      organizationId: 0,
      rolesId: []
    });
    setShowForm(false);
  };

  const editarUsuario = (usuario) => { 
    setNuevoUsuario(usuario)
    setIsEditMode(true);
    setShowForm(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario(prev => ({
      ...prev,
      [name]: name === "rolesId" ? [parseInt(value)] : value
    }));
    setIsEditMode(false);
    setShowForm(true)
  };

  const handleAgregarUsuario = () => {
    console.log("Nuevo usuario a agregar:", nuevoUsuario);
    reiniciarFormulario(); // Cierra el formulario
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
          <button style={btnAgregar} onClick={handleInputChange}>+ Agregar</button>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* FORMULARIO EMERGENTE */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl w-[420px] p-6 space-y-4">
            <h3 className="text-lg font-semibold">
              {isEditMode ? "Editar Usuario" : "Agregar nuevo usuario"}
            </h3>

            <div className="space-y-1">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                id="username"
                name="username"
                type="text"
                value={nuevoUsuario.username}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="mail" className="block text-sm font-medium text-gray-700">Correo</label>
              <input
                id="mail"
                name="mail"
                type="email"
                value={nuevoUsuario.mail}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={nuevoUsuario.password}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                            [appearance:textfield] [&::-ms-reveal]:hidden [&::-ms-clear]:hidden"
                />

                <span
                  className="absolute right-3 top-6 transform -translate-y-[55%] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                  ) : (
                    <EyeIcon className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                  )}
                </span>
              </div>
            </div>


            <div className="space-y-1">
              <label htmlFor="rolesId" className="block text-sm font-medium text-gray-700">Organización</label>
              <select
                id="organizationId"
                name="organizationId"
                value={nuevoUsuario.organizationId[0] || ""}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Seleccione una organización</option>
                {organizations.map((organizacion) => (
                  <option key={organizacion.id} value={organizacion.id}>
                    {organizacion.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="rolesId" className="block text-sm font-medium text-gray-700">Rol</label>
              <select
                id="rolesId"
                name="rolesId"
                value={nuevoUsuario.rolesId[0] || ""}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Seleccione un rol</option>
                {roles.map((rol) => (
                  <option key={rol.id} value={rol.id}>
                    {rol.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={reiniciarFormulario}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
              >
                Cancelar
              </button>
              <button
                onClick={handleAgregarUsuario}
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md shadow-md"
              >
                {isEditMode ? "Editar" : "Guardar"}
              </button>
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
                  <button style={iconBtn} onClick={() => editarUsuario(user)}>✏️</button>
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

const botonCancelar = {
  ...boton,
  backgroundColor: "#e74c3c", // rojo
  color: "white"
};

const labelStyle = {
  fontWeight: "bold",
  marginTop: "10px",
  marginBottom: "4px",
  fontSize: "14px",
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
