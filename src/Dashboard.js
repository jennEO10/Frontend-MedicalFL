import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard del Administrador</h2>
      <p className="dashboard-subtitle">Resumen del estado del sistema y actividades recientes</p>

      <div className="cards-container">
        <Card title="Organizaciones Activas" value="12" sub="+2 desde el último mes" />
        <Card title="Usuarios Totales" value="12" sub="+2 desde el último mes" />
        <Card title="Alertas de Seguridad" value="12" sub="+2 desde el último mes" />
        <Card title="Iteraciones Activas" value="12" sub="+2 desde el último mes" />
      </div>

      <div className="system-activity">
        <h3>Actividad del Sistema</h3>
        <p>[Gráfico de línea de actividad]</p>
      </div>

      <div>
        <h3>Actividad Reciente</h3>
        <ul className="activity-list">
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
    <div className="card">
      <h4>{title}</h4>
      <p className="card-value">{value}</p>
      <small>{sub}</small>
    </div>
  );
};

export default Dashboard;

