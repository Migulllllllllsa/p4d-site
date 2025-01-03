import { useState } from 'react'
import './App.css'
import '@fontsource/montserrat-alternates/700.css';
import '@fontsource/poppins';
import note from './assets/images/Computer.png';
import moco from './assets/images/trabalho.png'
import liga from './assets/images/Call.png'
import png from './assets/images/Computertransparent.png'

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
            src={png} 
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
        <div className='page-container3'>
          <div className='sobre-2'>
            <h1 className='about-02'>
              Serviços
            </h1>
          </div>
          <img className='Menino'
           src={moco} alt="trabaio" />
           <div>
            <p className='descricao02'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse a massa venenatis, fringilla sapien vitae, bibendum lectus. Nulla facilisi. In porta mauris tortor, sollicitudin faucibus ipsum placerat in. Suspendisse tristique volutpat porta. Vivamus tellus sem, blandit et dictum quis, commodo ac sapien. Fusce malesuada, nulla mollis rutrum consequat, felis elit interdum tellus, vitae ultrices lacus ante ut lacus. Nunc commodo tempor efficitur. Donec vitae tellus est. Nulla accumsan sagittis dolor. 
            </p>
          </div>
        </div>
        <div className='page-container4'>
          <div className='sobre-3'>
            <h1 className='about-03'>
              Contato
            </h1>
          </div>
          <img className='menina'
           src={liga} alt="trabaio" />
           <div>
            <p className='descricao03'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse a massa venenatis, fringilla sapien vitae, bibendum lectus. Nulla facilisi. In porta mauris tortor, sollicitudin faucibus ipsum placerat in. Suspendisse tristique volutpat porta. Vivamus tellus sem, blandit et dictum quis, commodo ac sapien. Fusce malesuada, nulla mollis rutrum consequat, felis elit interdum tellus, vitae ultrices lacus ante ut lacus. Nunc commodo tempor efficitur. Donec vitae tellus est. Nulla accumsan sagittis dolor. 
            </p>
          </div>
        </div>
    </div>
  )
}

export default App
