import React from "react";
import { Link } from "react-router-dom";

const SidebarCliente = () => {
  return (
    <div style={{ width: '250px', background: '#f4f4f4', padding: '20px', height: '100vh' }}>
      <h2>MedicalFL</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/cliente/dashboard"><button>Dashboard</button></Link></li> <br />
        <li><Link to="/cliente/entrenar"><button>Entrenar modelo</button></Link></li><br />
        <li><Link to="/cliente/usar"><button>Usar modelo</button></Link></li><br />
        <li><Link to="/cliente/reportes"><button>Ver reportes</button></Link></li><br />
        <li><Link to="/cliente/informacion"><button>Información adicional</button></Link></li>
      </ul>
    </div>
  );
};

export default SidebarCliente;

