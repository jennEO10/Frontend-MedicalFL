import React, { useState } from "react";

const UsarModelo = () => {
  const [form, setForm] = useState({ f1: "", f2: "", f3: "", f4: "" });
  const [resultado, setResultado] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const realizarPrediccion = () => {
    setResultado({
      confianza: "90%",
      riesgo: "Riesgo alto",
      factores: ["xxx", "XXX", "yyy"],
      recomendacion: "Se sugiere revisar al paciente."
    });
  };

  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%" }}>
      <h2>Usar modelo</h2>

      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <form style={{ flex: 1 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label>
              Feature 1
              <input
                name="f1"
                type="text"
                placeholder="Value"
                value={form.f1}
                onChange={handleChange}
                style={inputStyle}
              />
            </label>
            <label>
              Feature 2
              <input
                name="f2"
                type="text"
                placeholder="Value"
                value={form.f2}
                onChange={handleChange}
                style={inputStyle}
              />
            </label>
            <label>
              Feature 3
              <input
                name="f3"
                type="text"
                placeholder="Value"
                value={form.f3}
                onChange={handleChange}
                style={inputStyle}
              />
            </label>
            <label>
              Feature 4
              <textarea
                name="f4"
                placeholder="Value"
                value={form.f4}
                onChange={handleChange}
                style={{ ...inputStyle, height: "60px", resize: "vertical" }}
              />
            </label>
            <button
              type="button"
              onClick={realizarPrediccion}
              style={{
                background: "#222",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "6px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              Realizar predicción
            </button>
          </div>
        </form>

        {resultado && (
          <div style={{ flex: 1, background: "#eee", padding: "20px", borderRadius: "6px" }}>
            <strong>Resultado</strong>
            <p>Se tiene un {resultado.confianza} de confiabilidad de que el paciente tiene un {resultado.riesgo}.</p>
            <p>Factores más influyentes: {resultado.factores.join(", ")}</p>
            <p>Recomendación: {resultado.recomendacion}</p>
          </div>
        )}
      </div>

      <p style={{ fontSize: "12px", marginTop: "30px", color: "#777" }}>
        Los datos ingresados no se almacenan en la nube. Las predicciones se realizan utilizando modelos agregados previamente entrenados.
        Toda acción realizada con información médica debe contar con el consentimiento de la persona.
        El modelo de inteligencia artificial no reemplaza las labores del personal médico.
      </p>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "4px"
};

export default UsarModelo;
