import React from "react";

const EntrenarModelo = () => {
  return (
    <div style={{ padding: "30px", background: "#fff", borderRadius: "10px", width: "100%" }}>
      <h2>Entrenar modelo</h2>
      <h4 style={{ marginTop: "20px" }}>Pasos para iniciar el entrenamiento</h4>
      <p>Sigue estos pasos para configurar tu entorno local y comenzar el entrenamiento del modelo de forma segura:</p>

      <ol>
        <li>
          <strong>Instalar Docker (si aún no lo tienes):</strong><br />
          Accede al sitio oficial: <a href="https://www.docker.com/" target="_blank" rel="noreferrer">https://www.docker.com/</a><br />
          Descarga e instala Docker Desktop según tu sistema operativo.
        </li>
        <li>
          <strong>Descargar el contenedor de entrenamiento:</strong><br />
          Haz clic en el botón “Descargar contenedor” y guarda el archivo en una ubicación conocida de tu computadora.
        </li>
        <li>
          <strong>Generar tu código único de entrenamiento:</strong><br />
          Presiona el botón “Generar código” para obtener un código exclusivo de acceso.<br />
          Este código te permitirá autenticar la descarga del modelo base necesario para entrenar.
        </li>
        <li>
          <strong>Iniciar el contenedor:</strong><br />
          Abre la terminal o línea de comandos y ejecuta:<br />
          <code>docker run -p 8080:8080 nombre-del-contenedor</code>
        </li>
        <li>
          <strong>Acceder a la interfaz local:</strong><br />
          Abre tu navegador y visita: <a href="http://localhost:8080">http://localhost:8080</a>
        </li>
        <li>
          <strong>El contenedor descargará automáticamente el modelo base:</strong><br />
          Tras ingresar el código, se verificará su validez y se descargará la versión más reciente del modelo base de forma segura.
        </li>
        <li>
          <strong>Sube tu dataset y entrena el modelo:</strong><br />
          Carga tu archivo de datos clínicos en formato `.csv` o `.xlsx` y presiona “Iniciar entrenamiento”.
        </li>
      </ol>

      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <div style={{
          backgroundColor: "#666",
          color: "white",
          padding: "10px 20px",
          borderRadius: "6px",
          fontWeight: "bold",
          marginRight: "10px"
        }}>
          ABC-XX-2xjkL8
        </div>
        <span style={{ fontSize: "14px", color: "#666" }}>Generar código de único de entrenamiento</span>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input type="checkbox" defaultChecked style={{ marginRight: "8px" }} />
          Cuento con el consentimiento de uso activo de los datos.
        </label>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input type="checkbox" defaultChecked style={{ marginRight: "8px" }} />
          Tengo Docker actualmente instalado en mi ordenador.
        </label>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input type="checkbox" defaultChecked style={{ marginRight: "8px" }} />
          Reconozco que el uso y entrenamiento del modelo de inteligencia artificial no reemplaza el criterio humano para evaluar pacientes.
        </label>
      </div>

      <button style={{
        marginTop: "20px",
        backgroundColor: "#3b4fff",
        color: "white",
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      }}>
        Descargar docker
      </button>
    </div>
  );
};

export default EntrenarModelo;
