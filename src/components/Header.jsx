import React from "react";

function Header() {
  return (
    <header style={{ textAlign: "center", padding: "2rem" }}>
      <img
        src="/assets/foto-perfil.jpg"
        alt="Perfil"
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h1>Número & E-mail</h1>
      <p>📞 097-150-7814 | 📧 jackebatista_contato@gmail.com</p>
    </header>
  );
}

export default Header;