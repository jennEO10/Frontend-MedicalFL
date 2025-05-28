import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: '250px', background: '#f4f4f4', padding: '20px', height: '100vh' }}>
      <h2>MedicalFL</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><button onClick={() => navigate("/dashboard")}>Dashboard</button></li><br />
        <li><button onClick={() => navigate("/dashboard/organizaciones")}>Gestión de Organizaciones</button></li><br />
        <li><button onClick={() => navigate("/dashboard/usuarios")}>Gestión de Usuarios</button></li><br />
        <li><button onClick={() => navigate("/dashboard/roles")}>Gestión de Roles</button></li><br />
        <li><button onClick={() => navigate("/dashboard/iteraciones")}>Control de Iteraciones</button></li><br />
        <li><button onClick={() => navigate("/dashboard/logs")}>Logs del Sistema</button></li><br />
        <li><button onClick={() => navigate("/dashboard/auditoria")}>Reportes y Auditoría</button></li><br />
        <li><button onClick={() => navigate("/dashboard/alertas")}>Alertas de Seguridad</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;

