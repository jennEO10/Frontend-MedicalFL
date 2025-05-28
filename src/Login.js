import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import googleLogo from "./google-logo.png";
import "./App.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("Usuario logueado con Google:", result.user);
      })
      .catch((error) => {
        console.error("Error al iniciar sesión con Google:", error);
      });
  };

  const loginWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginWithEmail}>Iniciar Sesión</button>

      <div className="separator">
        <hr />
        <span>O</span>
        <hr />
      </div>

      <div className="google-button" onClick={loginWithGoogle}>
        <img src={googleLogo} alt="Google" style={{ width: "20px" }} />
        Ingresar con Google
      </div>
    </div>
  );
};

export default Login;
