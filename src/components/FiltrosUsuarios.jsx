const FiltrosUsuarios = ({
  filtros,
  setFiltros,
  estados = [],
  roles = [],
  onBuscar
}) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px] px-6 py-4 flex flex-wrap gap-4 border-b border-gray-300 bg-white">
        {/* Nombre */}
        <div className="flex flex-col w-[200px]">
          <label className="text-sm font-medium text-gray-700 mb-1">Nombre</label>
          <input
            type="text"
            placeholder="Buscar por nombre"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filtros.nombre}
            onChange={(e) => setFiltros({ ...filtros, nombre: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-[220px]">
          <label className="text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="text"
            placeholder="Buscar por email"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filtros.email}
            onChange={(e) => setFiltros({ ...filtros, email: e.target.value })}
          />
        </div>

        {/* Estado */}
        <div className="flex flex-col w-[160px]">
          <label className="text-sm font-medium text-gray-700 mb-1">Estado</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filtros.estado}
            onChange={(e) => setFiltros({ ...filtros, estado: Number(e.target.value) })}
          >
            {estados.map((e) => (
              <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>
        </div>

        {/* Rol */}
        <div className="flex flex-col w-[160px]">
          <label className="text-sm font-medium text-gray-700 mb-1">Rol</label>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filtros.rol}
            onChange={(e) => setFiltros({ ...filtros, rol: Number(e.target.value) })}
          >
            {roles.map((r) => (
              <option key={r.id} value={r.id}>{r.name}</option>
            ))}
          </select>
        </div>

        {/* Botón */}
        <div className="flex flex-col w-[100px]">
          <label className="text-sm font-medium text-transparent mb-1 select-none">Buscar</label>
          <button
            onClick={onBuscar}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-md shadow transition duration-200"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltrosUsuarios;
