import React, { useRef } from 'react';
import './App.css';
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/poppins';
import note from './assets/images/Computer.png';
import moco from './assets/images/trabalho.png';
import liga from './assets/images/Call.png';
import png from './assets/images/Computertransparent.png';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(
      () => {
        console.log('SUCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    )
  }
}

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
      <div className="page-container2" id="sobre">
        <div className="Sobre-1">
          <h1 className="about">Sobre</h1>
        </div>
        <div className="descricao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a massa venenatis, fringilla sapien vitae, bibendum lectus. Nulla
            facilisi.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a massa venenatis.
          </p>
        </div>
      </div>

      {/* Seção Contato */}
      <div className="page-container4" id="contato">
        <div className="sobre-3">
          <h1 className="about-03">Contato</h1>
        </div>
        <img className="menina" src={liga} alt="Contato" />
        <div>
          <p className="descricao03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a massa venenatis.
          </p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <input type="text" name="user_name" />
        <Label>Email</Label>
        <input type="email"name="user_email" />
        <Label>Message</Label>
        <textarea name="message" id=""></textarea>
        <input type="submit" value={send} />
      </form>
    </div>
  );
}

export default App;
