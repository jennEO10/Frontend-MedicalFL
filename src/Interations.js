import React from "react";

const Iterations = () => {
  const participantes = [
    { org: "Hospital Universitario", estado: "Procesando", progreso: 85, tiempo: "1h 23m", datos: "8,450 registros" },
    { org: "Clínica San Rafael", estado: "Procesando", progreso: 70, tiempo: "1h 23m", datos: "5,220 registros" },
    { org: "Hospital Norte", estado: "Procesando", progreso: 60, tiempo: "1h 23m", datos: "6,780 registros" },
    { org: "Centro Médico Regional", estado: "Inactivo", progreso: 0, tiempo: "-", datos: "0 registros" },
    { org: "Clínica Especializada", estado: "Procesando", progreso: 75, tiempo: "1h 23m", datos: "4,120 registros" }
  ];

  const colorEstado = {
    Procesando: { backgroundColor: "#d4edda", color: "#155724" },
    Inactivo: { backgroundColor: "#fff3cd", color: "#856404" }
  };

  return (
    <div style={{ padding: '30px', background: '#fff', borderRadius: '10px', width: '100%' }}>
      <h2>Gestión de Iteraciones</h2>
      <p>Administra las iteraciones del modelo de aprendizaje federado</p>

      <h3>Detalle de Iteración #28</h3>
      <p>Información detallada sobre la iteración actual</p>

      <div style={{ overflowX: 'auto', marginTop: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Organización</th>
              <th style={th}>Estado</th>
              <th style={th}>Progreso</th>
              <th style={th}>Tiempo Transcurrido</th>
              <th style={th}>Datos Procesados</th>
              <th style={th}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {participantes.map((p, i) => (
              <tr key={i}>
                <td style={td}>{p.org}</td>
                <td style={td}><span style={{ ...colorEstado[p.estado], padding: '4px 8px', borderRadius: '10px' }}>{p.estado}</span></td>
                <td style={td}>
                  <div style={{ background: '#eee', height: '8px', borderRadius: '4px', width: '100%' }}>
                    <div style={{ width: `${p.progreso}%`, background: '#4285F4', height: '100%', borderRadius: '4px' }}></div>
                  </div>
                  <small>{p.progreso}%</small>
                </td>
                <td style={td}>{p.tiempo}</td>
                <td style={td}>{p.datos}</td>
                <td style={td}><button style={iconBtn}>🔍</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button style={boton}>Parar Iteración</button>
        <button style={botonAzul}>Ver Métricas</button>
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
  padding: "12px",
  verticalAlign: 'middle'
};

const boton = {
  padding: "10px 16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "white",
  cursor: "pointer"
};

const botonAzul = {
  ...boton,
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none"
};

const iconBtn = {
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer"
};

export default Iterations;
