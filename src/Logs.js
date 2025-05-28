import React from "react";

const Logs = () => {
  const logs = [
    {
      timestamp: "13/05/2025 09:47:23",
      tipo: "Info",
      modulo: "Autenticación",
      mensaje: "Inicio de sesión exitoso",
      usuario: "jperez@hospital-universitario.org",
      ip: "192.168.1.45"
    },
    {
      timestamp: "13/05/2025 09:32:12",
      tipo: "Warning",
      modulo: "Iteración",
      mensaje: "Tiempo de respuesta alto del nodo",
      usuario: "sistema",
      ip: "10.0.0.5"
    },
    {
      timestamp: "13/05/2025 08:15:33",
      tipo: "Error",
      modulo: "API",
      mensaje: "Error de conexión con el servidor",
      usuario: "sistema",
      ip: "10.0.0.8"
    }
  ];

  const colorTipo = {
    Info: { backgroundColor: "#d1ecf1", color: "#0c5460" },
    Warning: { backgroundColor: "#fff3cd", color: "#856404" },
    Error: { backgroundColor: "#f8d7da", color: "#721c24" }
  };

  return (
    <div style={{ padding: '30px', background: '#fff', borderRadius: '10px', width: '100%' }}>
      <h2>Logs del Sistema</h2>
      <p>Monitoreo de la actividad del sistema federado</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px', alignItems: 'center' }}>
        <input type="text" placeholder="Buscar en logs..." style={{ flex: 1, padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <div style={{ display: 'flex', gap: '6px' }}>
          <button style={botonActivo}>Todos</button>
          <button style={boton}>Info</button>
          <button style={boton}>Warning</button>
          <button style={boton}>Error</button>
          <button style={boton}>Critical</button>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <input type="date" defaultValue="2025-05-01" style={campoFecha} />
          <span>a</span>
          <input type="date" defaultValue="2025-05-13" style={campoFecha} />
          <button style={boton}>Aplicar</button>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Timestamp</th>
              <th style={th}>Tipo</th>
              <th style={th}>Módulo</th>
              <th style={th}>Mensaje</th>
              <th style={th}>Usuario</th>
              <th style={th}>IP</th>
              <th style={th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i}>
                <td style={td}>{log.timestamp}</td>
                <td style={td}><span style={{ ...colorTipo[log.tipo], padding: '4px 8px', borderRadius: '10px' }}>{log.tipo}</span></td>
                <td style={td}>{log.modulo}</td>
                <td style={td}>{log.mensaje}</td>
                <td style={td}>{log.usuario}</td>
                <td style={td}>{log.ip}</td>
                <td style={td}><button style={iconBtn}>🔍</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <button style={btnExportar}>Exportar Logs</button>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={botonActivo}>1</button>
          <button style={boton}>2</button>
          <button style={boton}>3</button>
          <button style={boton}>Siguiente</button>
        </div>
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

const campoFecha = {
  padding: "6px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const iconBtn = {
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer"
};

const btnExportar = {
  backgroundColor: "#28a745",
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer"
};

export default Logs;
