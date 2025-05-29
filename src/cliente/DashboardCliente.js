import React from "react";

const DashboardCliente = () => {
  return (
    <div style={{ padding: '30px', background: '#fff', borderRadius: '10px', width: '100%' }}>
      <h2>Dashboard</h2>

      <section style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px', marginBottom: '20px' }}>
        <h3>Estado actual</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p>Estado de última ronda: <span style={estado}>Finalizado</span></p>
            <p>Disponibilidad del modelo: <span style={disponible}>Habilitado</span></p>
            <p>Versión del modelo publicado: <span style={version}>1</span></p>
          </div>
          <button style={botonAccion}>Entrenar modelo</button>
        </div>
      </section>

      <section style={{ borderBottom: '1px solid #ccc', paddingBottom: '20px', marginBottom: '20px' }}>
        <h3>Métricas actuales del modelo</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p>Precision: <strong>89.9%</strong></p>
          <p>Recall: <strong>80.5%</strong></p>
          <p>F1 Score: <strong>85.2%</strong></p>
          <p>Accuracy: <strong>90.2%</strong></p>
        </div>
        <button style={botonAccion}>Ver histórico</button>
      </section>

      <section>
        <h3>Historial de últimas de predicciones</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#333', color: '#fff', borderRadius: '6px' }}>
          <thead>
            <tr>
              <th style={th}>ID</th>
              <th style={th}>Fecha</th>
              <th style={th}>Resultado</th>
              <th style={th}>Porcentaje de confiabilidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>1</td>
              <td style={td}>23/03/2025</td>
              <td style={td}>Riesgo Alto</td>
              <td style={td}>90%</td>
            </tr>
          </tbody>
        </table>
        <button style={{ ...botonAccion, marginTop: '10px' }}>Ver más</button>
      </section>
    </div>
  );
};

const estado = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '4px 10px',
  borderRadius: '6px',
  fontWeight: 'bold'
};

const disponible = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '4px 10px',
  borderRadius: '6px',
  fontWeight: 'bold'
};

const version = {
  backgroundColor: '#777',
  color: 'white',
  padding: '4px 10px',
  borderRadius: '6px',
  fontWeight: 'bold'
};

const botonAccion = {
  backgroundColor: '#6c63ff',
  color: 'white',
  border: 'none',
  padding: '10px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
};

const th = {
  padding: '12px',
  borderBottom: '1px solid #444',
  textAlign: 'left'
};

const td = {
  padding: '12px',
  borderBottom: '1px solid #555'
};

export default DashboardCliente;
