import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard del Administrador</h2>
      <p>Resumen del estado del sistema y actividades recientes</p>

      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <Card title="Organizaciones Activas" value="12" sub="+2 desde el último mes" />
        <Card title="Usuarios Totales" value="12" sub="+2 desde el último mes" />
        <Card title="Alertas de Seguridad" value="12" sub="+2 desde el último mes" />
        <Card title="Iteraciones Activas" value="12" sub="+2 desde el último mes" />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Actividad del Sistema</h3>
        <div style={{ background: '#f8f8f8', height: '150px', border: '1px solid #ddd', borderRadius: '8px' }}>
          {/* Aquí irá el gráfico (simulado por ahora) */}
          <p style={{ textAlign: 'center', paddingTop: '60px' }}>[Gráfico de línea de actividad]</p>
        </div>
      </div>

      <div>
        <h3>Actividad Reciente</h3>
        <ul>
          <li>🔔 Alerta de seguridad: Acceso inusual detectado - Hace 30 minutos</li>
          <li>👤 Usuario nuevo creado: maria.lopez@hospital.org - Hace 2 horas</li>
          <li>🏥 Organización “Hospital Norte” agregada - Hace 3 horas</li>
          <li>✅ Iteración #28 completada - Hace 5 horas</li>
          <li>📊 Nuevo reporte de auditoría disponible - Hace 1 día</li>
        </ul>
      </div>
    </div>
  );
};

const Card = ({ title, value, sub }) => {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      minWidth: '200px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h4>{title}</h4>
      <p style={{ fontSize: '24px', margin: '10px 0' }}>{value}</p>
      <small>{sub}</small>
    </div>
  );
};

export default Dashboard;
