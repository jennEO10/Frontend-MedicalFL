import React from "react";

const VerReportes = () => {
  const reportes = [
    { id: 1, fecha: "23/03/2025", resultado: "Riesgo Alto", confianza: "90%" }
  ];

  const exportarCSV = () => {
    const encabezado = "ID,Fecha,Resultado,Porcentaje de confiabilidad\n";
    const filas = reportes.map(r => `${r.id},${r.fecha},${r.resultado},${r.confianza}`).join("\n");
    const blob = new Blob([encabezado + filas], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "reportes.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%", position: "relative" }}>
      <h2>Ver reportes</h2>

      <button onClick={exportarCSV} style={{
        position: "absolute",
        right: "30px",
        top: "30px",
        background: "none",
        border: "none",
        fontSize: "20px",
        cursor: "pointer"
      }} title="Exportar CSV">
        ⬇️
      </button>

      <table style={{
        width: "100%",
        marginTop: "30px",
        borderCollapse: "collapse",
        background: "#333",
        color: "white",
        borderRadius: "6px",
        overflow: "hidden"
      }}>
        <thead>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Fecha</th>
            <th style={th}>Resultado</th>
            <th style={th}>Porcentaje de confiabilidad</th>
          </tr>
        </thead>
        <tbody>
          {reportes.map((r) => (
            <tr key={r.id}>
              <td style={td}>{r.id}</td>
              <td style={td}>{r.fecha}</td>
              <td style={td}>{r.resultado}</td>
              <td style={td}>{r.confianza}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ fontSize: "12px", marginTop: "30px", color: "#777" }}>
        Los datos ingresados no se almacenan en la nube. Las predicciones se realizan utilizando modelos agregados previamente entrenados.
        Toda acción realizada con información médica debe contar con el consentimiento de la persona.
        El modelo de inteligencia artificial no reemplaza las labores del personal médico.
      </p>
    </div>
  );
};

const th = {
  padding: "12px",
  background: "#222",
  borderBottom: "1px solid #555",
  textAlign: "left"
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #555"
};

export default VerReportes;
