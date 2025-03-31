import { useState } from "react";
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
import ImagePopup from "./components/ImagePopup";

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
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#servicos">Soluções</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content" id="home">
        <div className="text-section">
          <h1>
            Conectando tecnologia e inovação para controle de seus ativos e bens utilizando as
            melhores tecnologias.
          </h1>
        </div>
        <div className="image-section">
          <img src={png} alt="Laptop" />
        </div>
      </main>

      <div className="page-container2" id="sobre">
        <div className="Sobre-1">
          <h1 className="about">Sobre</h1>
        </div>
        <div className="descricao">
          <p>
            Inovação é o nosso foco. Para construir um negócio de sucesso, é necessário ter o
            parceiro certo e com boas ferramentas. A P4D Technology é uma empresa dedicada no
            desenvolvimento de softwares de qualidade e focado no seu negócio.
          </p>
        </div>
        <img className="Laptop2" src={note} alt="sla" />
      </div>

      <div className="page-container3" id="servicos">
        <div className="sobre-2">
          <h1 className="about-02">Soluções</h1>
        </div>
        <img className="Menino" src={moco} alt="trabalho" />
        <div>
          <p className="descricao02">
            Temos o software certo para sua necessidade. Em breve novidades
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "flex-start" }}>
            <img
              className="Soft"
              src={logoSr}
              alt="soft rental"
              onClick={() => openModal("soft")}
              style={{ cursor: "pointer" }}
            />
            <img
              className="Asset"
              src={logoAc}
              alt="asset control"
              onClick={() => openModal("assets")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>

      <div className="page-container4" id="contato">
        <div>
          <h1 className="about-03">Contato</h1>
          <img className="menina" src={liga} alt="Contato" />
        </div>

        <div className="Contato">
          <ContactForm />
        </div>
      </div>

      {/* Modal Popup */}
      <ImagePopup isOpen={modalOpen} content={modalContent} onClose={closeModal} />
    </div>
  );
}

export default App;
