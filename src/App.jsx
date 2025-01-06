import { useRef } from 'react';
import './App.css';
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/poppins';
import note from './assets/images/Computer.png';
import moco from './assets/images/trabalho.png';
import liga from './assets/images/Call.png';
import png from './assets/images/Computertransparent.png';

function App() {
  // Referências para as seções
  const homeRef = useRef(null);
  const sobreRef = useRef(null);
  const servicosRef = useRef(null);
  const contatoRef = useRef(null);

  // Função para rolar até a seção correspondente
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container">
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">P4D</div>
        <nav className="nav">
          <button onClick={() => scrollToSection(homeRef)}>Home</button>
          <button onClick={() => scrollToSection(sobreRef)}>Sobre</button>
          <button onClick={() => scrollToSection(servicosRef)}>Serviços</button>
          <button onClick={() => scrollToSection(contatoRef)}>Contato</button>
        </nav>
      </header>

      {/* Seção Home */}
      <main ref={homeRef} className="main-content">
        <div className="text-section">
          <h1>
            O texto <br />
            <span>fica</span> <br />
            aqui
          </h1>
        </div>
        <div className="image-section">
          <img src={png} alt="Laptop" />
        </div>
      </main>

      {/* Seção Sobre */}
      <div ref={sobreRef} className="page-container2">
        <div className="Sobre-1">
          <h1 className="about">Sobre</h1>
        </div>
        <div className="descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a massa venenatis,
            fringilla sapien vitae, bibendum lectus. Nulla facilisi. In porta mauris tortor,
            sollicitudin faucibus ipsum placerat in.
          </p>
        </div>
        <img className="Laptop2" src={note} alt="LaptopII" />
      </div>

      {/* Seção Serviços */}
      <div ref={servicosRef} className="page-container3">
        <div className="sobre-2">
          <h1 className="about-02">Serviços</h1>
        </div>
        <img className="Menino" src={moco} alt="trabalho" />
        <div>
          <p className="descricao02">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a massa venenatis,
            fringilla sapien vitae, bibendum lectus. Nulla facilisi. In porta mauris tortor,
            sollicitudin faucibus ipsum placerat in.
          </p>
        </div>
      </div>

      {/* Seção Contato */}
      <div ref={contatoRef} className="page-container4">
        <div className="sobre-3">
          <h1 className="about-03">Contato</h1>
        </div>
        <img className="menina" src={liga} alt="trabalho" />
        <div>
          <p className="descricao03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a massa venenatis,
            fringilla sapien vitae, bibendum lectus. Nulla facilisi. In porta mauris tortor,
            sollicitudin faucibus ipsum placerat in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
