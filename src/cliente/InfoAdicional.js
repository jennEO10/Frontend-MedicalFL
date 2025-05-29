import React from "react";

const InfoAdicional = () => {
  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%" }}>
      <h2>Información adicional</h2>
      <div style={{ marginTop: "20px", lineHeight: "1.8", color: "#333", fontSize: "15px" }}>
        <p>
          Esta plataforma ha sido diseñada con el objetivo de preservar la privacidad de los datos clínicos sensibles mediante el uso de aprendizaje federado.
          Todos los modelos de inteligencia artificial se entrenan localmente en cada institución médica, evitando la transferencia de datos personales hacia servidores externos.
        </p>

        <p>
          El sistema ha sido desarrollado específicamente para asistir en la predicción de partos prematuros en clínicas y hospitales de Lima Metropolitana.
          Su uso debe entenderse como una herramienta de apoyo complementario para la toma de decisiones médicas, y no como un reemplazo del juicio clínico profesional.
        </p>

        <p>
          El uso de esta herramienta requiere que los datos utilizados cuenten con el debido consentimiento informado del paciente, conforme a la Ley N° 29733 de Protección de Datos Personales en Perú,
          y alineado con principios del GDPR y la HIPAA. La responsabilidad sobre la gestión de dichos consentimientos recae exclusivamente en cada institución usuaria.
        </p>

        <p>
          Las predicciones generadas por el modelo no deben ser utilizadas fuera del contexto médico previsto. Su precisión puede variar según la calidad de los datos locales,
          y un uso indebido o con datos incompletos puede afectar el rendimiento del sistema.
        </p>

        <p>
          Esta solución fue desarrollada bajo principios éticos y de ciberseguridad, incorporando controles técnicos como cifrado, autenticación segura, auditoría de accesos
          y mecanismos de monitoreo, para mitigar los riesgos asociados al uso de modelos de IA en el sector salud.
        </p>

        <p>
          Para soporte técnico o consultas relacionadas con el uso de la plataforma, comuníquese con el administrador designado en su institución.
        </p>

        <p><strong>Última actualización del modelo federado:</strong> 17/08/2025</p>
      </div>
    </div>
  );
};

export default InfoAdicional;
