import React, { useState } from "react";
import "./App.css";
import "@fontsource/montserrat-alternates/700.css";
import "@fontsource/poppins";
import note from "./assets/images/computer.png";
import moco from "./assets/images/trabalho.png";
import liga from "./assets/images/call.png";
import png from "./assets/images/computer-transparent.png";
import logoAc from "./assets/images/logo-ac.png";
import logoSr from "./assets/images/logo-sr.png";
import ContactForm from "./components/ContactForm";
import embac from "./assets/images/transp.png";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">P4D</div>
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Soluções</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content" id="home">
        <div className="text-section">
          <h1>Conectando tecnologia e inovação...</h1>
        </div>
        <div className="image-section">
          <img src={png} alt="Laptop" />
        </div>
      </main>

      <div className="page-container3" id="servicos">
        <h1 className="about-02">Soluções</h1>
        <img className="Menino" src={moco} alt="trabalho" />
        <p className="descricao02">Temos o software certo para sua necessidade</p>
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <img className="Soft" src={logoSr} alt="soft rental" onClick={() => openModal("Soft Rental - Descrição do software...")} style={{ cursor: "pointer" }} />
          <img className="Asset" src={logoAc} alt="asset control" onClick={() => openModal("Asset Control - Descrição do software...")} style={{ cursor: "pointer" }} />
        </div>
        <p className="aguarde">Aguarde novidades</p>
      </div>

      <div className="page-container4" id="contato">
        <h1 className="about-03">Contato</h1>
        <img className="menina" src={liga} alt="Contato" />
        <div className="Contato">
          <ContactForm />
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
