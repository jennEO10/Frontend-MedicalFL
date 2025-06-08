import React, { useEffect, useState, useMemo } from "react";
import userService from "./services/usersService";
import rulesService from "./services/rulesService";
import organizationService from "./services/organizationService";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ModalConfirmacion from './components/ModalConfirmacion';
import FiltrosUsuarios from './components/FiltrosUsuarios';


const Users = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [roles, setRoles] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    id: 0,
    username: "",
    password: "",
    enabled: true,
    mail: "",
    organizationId: 0,
    rolesId: []
  });

  const [filtros, setFiltros] = useState({
    nombre: '',
    email: '',
    estado: 0,
    rol: 0
  });

  const rolesConTodos = useMemo(() => [
    { id: 0, name: 'Todos' },
    ...roles
  ], [roles]);

  const estados = [
    { id: 0, name: 'Todos' },
    { id: 1, name: 'Activo' },
    { id: 2, name: 'Inactivo' },
    { id: 3, name: 'Bloqueados' },
  ];

  const colorEstado = {
    true: "bg-green-100 text-green-800",
    false: "bg-red-100 text-red-800"
  };

  const data = async () => {
    try {
      const usuarios = await userService.getAllUsers();
      const rules = await rulesService.getAllRules();
      const organizations = await organizationService.fetchAll();
      setUsuarios(usuarios);
      setRoles(rules);
      setOrganizations(organizations);
    } catch (error) {
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
    setUsuarioAEliminar(null);
    setShowForm(false);
  };

  const editarUsuario = (usuario) => {
    setNuevoUsuario(usuario);
    setIsEditMode(true);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoUsuario(prev => ({
      ...prev,
      [name]: name === "rolesId" ? [parseInt(value)] : value
    }));
    setIsEditMode(false);
    setShowForm(true);
  };

  const handleAgregarUsuario = async () => {
    try {
      if (!isEditMode) {
        await userService.newUser(nuevoUsuario);
      } else {
        await userService.updateUser(nuevoUsuario.id, nuevoUsuario);
      }
      reiniciarFormulario();
      await data();
    } catch (error) {
      setError("No se pudo agregar el usuario. Verifica los datos.");
    }
  }; 

  const handleEliminarClick = (user) => {
    setUsuarioAEliminar(user);
    setShowDeleteModal(true);
  };

  const handleEliminarUsuarios = async () => { 
    try {
      await userService.deleteUser(usuarioAEliminar.id);
      reiniciarFormulario();
      setShowDeleteModal(false);
      await data();
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      setError("No se pudo eliminar el usuario.");
    }
  }

  return (
    <div className="p-4 w-full flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">Gestión de Usuarios</h2>
        <p className="text-gray-600 mb-4">Administra los usuarios que acceden a la plataforma federada</p>

        {/* <div className="flex flex-wrap gap-2 justify-between mb-4">
          <input type="text" placeholder="Buscar usuario..." className="border px-3 py-2 rounded-md w-full sm:w-auto flex-1" />
          <div className="flex gap-2">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">Activos</button>
            <button className="bg-gray-200 px-4 py-2 rounded-md">Inactivos</button>
            <button className="bg-gray-200 px-4 py-2 rounded-md">Bloqueados</button>
            <button className="bg-gray-200 px-4 py-2 rounded-md">Todos</button>
            <button onClick={handleInputChange} className="bg-purple-500 text-white px-4 py-2 rounded-md">+ Agregar</button>
          </div>
        </div> */}

        <FiltrosUsuarios
          filtros={filtros}
          setFiltros={setFiltros}
          estados={estados}
          roles={rolesConTodos}
          onBuscar={() => {
            // aquí puedes ejecutar tu lógica para buscar
            data(); // o la función que actualice la lista
          }}
        />

        {error && <p className="text-red-500 mb-2">{error}</p>}

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
                  value={nuevoUsuario.organizationId || ""}
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

        {showDeleteModal && (
          <ModalConfirmacion
            isOpen={showDeleteModal}
            username={usuarioAEliminar?.username}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={handleEliminarUsuarios}
          />
        )}


        <div className="overflow-y-auto max-h-[60vh]">
          <table className="w-full table-auto text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Organización</th>
                <th className="px-4 py-2 text-left">Rol</th>
                <th className="px-4 py-2 text-left">Estado</th>
                <th className="px-4 py-2 text-left">Último Acceso</th>
                <th className="px-4 py-2 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((user, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2">{user.username}</td>
                  <td className="px-4 py-2">{user.mail}</td>
                  <td className="px-4 py-2">Org #{user.organizationId}</td>
                  <td className="px-4 py-2">Rol #{user.rolesId[0]}</td>
                  <td className="px-4 py-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorEstado[user.enabled]}`}>
                      {user.enabled ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="px-4 py-2">--/--/----</td>
                  <td className="px-4 py-2">
                    <div className="flex gap-2">
                      <button
                        title="Editar"
                        onClick={() => editarUsuario(user)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full shadow-md transition duration-200"
                      >
                        ✏️
                      </button>
                      <button
                        title="Ver"
                        className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full shadow-md transition duration-200"
                      >
                        🔍
                      </button>
                      <button
                        title="Eliminar"
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-md transition duration-200"
                        onClick={() => { handleEliminarClick(user) }}
                      >
                        ❌
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
