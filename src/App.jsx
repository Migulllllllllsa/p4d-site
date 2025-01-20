import React, { useRef } from 'react';
import './App.css';
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/poppins';
import note from './assets/images/Computer.png';
import moco from './assets/images/trabalho.png';
import liga from './assets/images/Call.png';
import png from './assets/images/Computertransparent.png';
import ContactForm from './components/ContactForm';



function App() {
  
  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">P4D</div>
        {/* Menu de navegação */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content" id="home">
        <div className="text-section">
          <h1>
            Conectando tecnologia e inovação <br />
            <span>para controle de seus ativos</span> <br />
            e bens utilizando as melhores tecnologias.
          </h1>
        </div>
        <div className="image-section">
          <img src={png} alt="Laptop" />
        </div>
      </main>

      {/* Seção Sobre */}
      <div className="page-container2" id="sobre">
        <div className="Sobre-1">
          <h1 className="about">Sobre</h1>
        </div>
        <div className="descricao">
          <p>
          Inovação é o nosso foco.
          Para construir um negócio de sucesso, é necessário ter o parceiro certo e com boas ferramentas.
          A P4D Technology é uma empresa dedicada no desenvolvimento de softwares de qualidade e focado no seu negócio.
          </p>
        </div>
        <img className='Laptop2' src={note} alt="sla" />
      </div>

      {/* Seção Serviços */}
      <div className="page-container3" id="servicos">
        <div className="sobre-2">
          <h1 className="about-02">Serviços</h1>
        </div>
        <img className="Menino" src={moco} alt="trabalho" />
        <div>
          <p className="descricao02">
          Mudar Serviços para Soluções
          Temos o software certo para sua necessidade
          Logo do Soft Rental e Asset Control
          </p>
          <p className='aguarde'>
          Aguarde novidades abaixo dos logos
          </p>
        </div>
      </div>

      {/* Seção Contato */}
      <div className="page-container4" id="contato">
        <div className="sobre-3">
          <h1 className="about-03"></h1>
        </div>
        <img className="menina" src={liga} alt="Contato" />
        <div>
          <p className="descricao03">
          </p>
        </div>
           <div className='Contato'>
              <ContactForm />
           </div>
      </div>
    </div>
  );
}

export default App;
