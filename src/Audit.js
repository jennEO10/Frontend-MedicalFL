import React from "react";

const Audit = () => {
  const auditoria = [
    { fecha: "13/05/2025 09:45", usuario: "Juan Pérez", organizacion: "Hospital Universitario", evento: "Inicio de sesión", modulo: "Autenticación", nivel: "Info" },
    { fecha: "12/05/2025 15:30", usuario: "María López", organizacion: "Clínica San Rafael", evento: "Modificación de configuración", modulo: "Iteraciones", nivel: "Advertencia" },
    { fecha: "12/05/2025 14:22", usuario: "Carlos Rodríguez", organizacion: "Hospital Norte", evento: "Iniciar iteración #28", modulo: "Iteraciones", nivel: "Exito" },
    { fecha: "11/05/2025 10:15", usuario: "Sistema", organizacion: "Global", evento: "Error de sincronización", modulo: "Iteraciones", nivel: "Error" },
    { fecha: "10/05/2025 16:40", usuario: "Ana Martínez", organizacion: "Centro Médico Regional", evento: "Exportación de datos", modulo: "Reportes", nivel: "Info" },
    { fecha: "10/05/2025 11:20", usuario: "Roberto Sánchez", organizacion: "Clínica Especializada", evento: "Cambio de permisos", modulo: "Roles", nivel: "Advertencia" }
  ];

  const colores = {
    Info: { backgroundColor: "#d1ecf1", color: "#0c5460" },
    Advertencia: { backgroundColor: "#fff3cd", color: "#856404" },
    Error: { backgroundColor: "#f8d7da", color: "#721c24" },
    Exito: { backgroundColor: "#d4edda", color: "#155724" }
  };

  return (
    <div style={{ padding: '30px', background: '#fff', borderRadius: '10px', width: '100%' }}>
      <h2>Reportes y Auditoría</h2>
      <p>Informes y estadísticas del sistema federado</p>

      <div style={{ display: 'flex', gap: '10px', margin: '20px 0', flexWrap: 'wrap' }}>
        <div style={boxCard}>Rendimiento del Modelo<br /><small>Última actualización: 12/05/2025</small></div>
        <div style={boxCard}>Participación de Nodos<br /><small>Última actualización: 11/05/2025</small></div>
        <div style={boxCard}>Uso del Sistema<br /><small>Última actualización: 10/05/2025</small></div>
        <div style={boxCard}>Rendimiento de Red<br /><small>Última actualización: 09/05/2025</small></div>
      </div>

      <h3>Auditoría</h3>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap', alignItems: 'center' }}>
        <input type="date" defaultValue="2025-05-01" style={campoFecha} />
        <span>hasta</span>
        <input type="date" defaultValue="2025-05-13" style={campoFecha} />
        <button style={boton}>Aplicar</button>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '6px' }}>
          <button style={botonActivo}>Todos</button>
          <button style={boton}>Accesos</button>
          <button style={boton}>Cambios</button>
          <button style={boton}>Errores</button>
        </div>
        <button style={btnExportar}>Exportar CSV</button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Fecha y Hora</th>
              <th style={th}>Usuario</th>
              <th style={th}>Organización</th>
              <th style={th}>Evento</th>
              <th style={th}>Módulo</th>
              <th style={th}>Nivel</th>
              <th style={th}>Detalles</th>
            </tr>
          </thead>
          <tbody>
            {auditoria.map((log, i) => (
              <tr key={i}>
                <td style={td}>{log.fecha}</td>
                <td style={td}>{log.usuario}</td>
                <td style={td}>{log.organizacion}</td>
                <td style={td}>{log.evento}</td>
                <td style={td}>{log.modulo}</td>
                <td style={td}><span style={{ ...colores[log.nivel], padding: '4px 8px', borderRadius: '10px' }}>{log.nivel}</span></td>
                <td style={td}><button style={iconBtn}>🔍</button></td>
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

const campoFecha = {
  padding: "6px",
  borderRadius: "6px",
  border: "1px solid #ccc"
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

const btnExportar = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer"
};

const iconBtn = {
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer"
};

const boxCard = {
  flex: '1 1 200px',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '15px',
  textAlign: 'left',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

export default Audit;

