import { useState } from 'react'
import './App.css'
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/poppins';
import note from './assets/images/Computer.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page-container">
    <header className="header">
      <div className="logo">P4D</div>
    </header>

    <main className="main-content">
        <div className="text-section">
          <h1>
            O texto <br />
            <span>fica</span> <br />
            aqui
          </h1>
        </div>
        <div className="image-section">
          <img
            src="https://existore.com.br/wp-content/uploads/2023/06/1-Macbook-Air-M2-Tela-13-6-Cinza-espacial.webp" 
            alt="Laptop"
          />
          </div>
        </main>

        <div className="page-container2">
          <div className="Sobre-1">
            <h1 className="about">Sobre</h1>
          </div>
          <div className="descricao">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse a massa venenatis, fringilla sapien vitae, bibendum lectus. Nulla facilisi. In porta mauris tortor, sollicitudin faucibus ipsum placerat in. Suspendisse tristique volutpat porta. Vivamus tellus sem, blandit et dictum quis, commodo ac sapien. Fusce malesuada, nulla mollis rutrum consequat, felis elit interdum tellus, vitae ultrices lacus ante ut lacus. Nunc commodo tempor efficitur. Donec vitae tellus est. Nulla accumsan sagittis dolor. 
            </p>
          </div>
        </div>
        <div>
          <img className='Laptop2'
            src={note} 
            alt="LaptopII"/>
        </div>
    </div>
  )
}

export default App
