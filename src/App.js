import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./App.css";
import googleLogo from "./google-logo.png"; 
import usericon from "./images.png";
import { auth, provider } from "./firebase";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("Usuario logueado:", result.user);
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
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
      {user ? (
        <>
          <h2>Bienvenido, {user.displayName}</h2>
          <img
            src={usericon}
            alt="Foto"
            style={{ width: 50, borderRadius: "50%" }}
          />
          <p>{user.email}</p>
        </>
      ) : (
        <>
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
            <span>Or</span>
            <hr />
          </div>

          <div className="google-button" onClick={loginWithGoogle}>
            <img src={googleLogo} alt="Google" style={{ width: "20px" }} />
            Ingresar con Google
          </div>
        </>
      )}
    </div>
  );
}

export default App;
