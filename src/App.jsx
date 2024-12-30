import { useState } from 'react'
import './App.css'
import '@fontsource/montserrat-alternates/700.css';

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
          <div className="circle"></div>
          </div>
        </main>
    </div>
  )
}

export default App
