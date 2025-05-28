import React from "react";

const Alerts = () => {
  const alertas = [
    {
      fecha: "13/05/2025",
      tipo: "Acceso no autorizado",
      entidad: "Clínica San Rafael",
      detalle: "Intento de acceso fallido desde IP desconocida",
      severidad: "Alta"
    },
    {
      fecha: "12/05/2025",
      tipo: "Credenciales expuestas",
      entidad: "Hospital Norte",
      detalle: "Usuario reportado por envío de spam tras filtración",
      severidad: "Crítica"
    },
    {
      fecha: "11/05/2025",
      tipo: "Uso de cuenta inactiva",
      entidad: "Centro Médico Regional",
      detalle: "Cuenta desactivada fue utilizada para acceso API",
      severidad: "Media"
    },
    {
      fecha: "10/05/2025",
      tipo: "Múltiples intentos fallidos",
      entidad: "Clínica Especializada",
      detalle: "5 intentos fallidos de inicio de sesión en 10 minutos",
      severidad: "Baja"
    }
  ];

  const colorSeveridad = (nivel) => {
    switch (nivel) {
      case "Crítica":
        return { backgroundColor: "#f8d7da", color: "#721c24" };
      case "Alta":
        return { backgroundColor: "#fff3cd", color: "#856404" };
      case "Media":
        return { backgroundColor: "#d1ecf1", color: "#0c5460" };
      case "Baja":
        return { backgroundColor: "#e2e3e5", color: "#383d41" };
      default:
        return {};
    }
  };

  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%" }}>
      <h2 style={{ marginBottom: "10px" }}>Alertas de Seguridad</h2>
      <p style={{ marginBottom: "20px" }}>
        Revisión de eventos sospechosos y vulnerabilidades recientes del sistema
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={th}>Fecha</th>
            <th style={th}>Tipo</th>
            <th style={th}>Entidad</th>
            <th style={th}>Detalle</th>
            <th style={th}>Severidad</th>
          </tr>
        </thead>
        <tbody>
          {alertas.map((a, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={td}>{a.fecha}</td>
              <td style={td}>{a.tipo}</td>
              <td style={td}>{a.entidad}</td>
              <td style={td}>{a.detalle}</td>
              <td style={{ ...td, ...colorSeveridad(a.severidad), borderRadius: "12px" }}>{a.severidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default Alerts;