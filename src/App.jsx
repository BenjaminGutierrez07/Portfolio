import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <nav className="nav">
        <ul className="nav_links">
          <li>
          <a className="nav_link" href="https://candid-biscochitos-30d0ef.netlify.app/">About</a>
          </li>
          <li>
            <a className="nav_link" href="https://statuesque-kitsune-e5a07e.netlify.app/">Contact</a>
          </li>
        </ul>
      </nav>
  
      <header className="header"> 
        <h1>Hey I am Benjamin Gutierrez</h1>
        <p>a web developer</p>
      </header>
  
      <main className="main">
        <h2>These are my projects</h2>
        <section className="cards">
          <div className="card">
              <a href="https://cheery-monstera-317c66.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="cardOne">
                  <img src="chees.png" alt="Cheescake" />
                  <div className='titleImg'>Cheesecake Recipe </div>
                </div>
              </a>
            <a href="https://spontaneous-snickerdoodle-125e51.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="cardTwo">
                  <img src="calculator.png" alt="Calculadora Restaurante" />
                  <div className='titleImgTwo'>Restaurant Calculator</div>
                </div>
              </a>
              <a href="https://deluxe-dolphin-0df9ec.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="cardThree">
                  <img src="paginaweb.png" alt="PaginaWeb" />
                  <div className='titleImgTh'>Dream's Store</div>
                </div>
              </a>
              <a href="https://benjamingutierrez07.github.io/tictac/" target="_blank" rel="noopener noreferrer">
                <div className="cardFour">
                  <img src="tictoctoe.png" alt="tictactoe" />
                  <div className='titleImgFo'>Tic Tac Toe</div>
                </div>
              </a>
              <a href="https://benjamingutierrez07.github.io/Mini_project/" target="_blank" rel="noopener noreferrer">
                <div className="cardFive">
                  <img src="windbnb.png" alt="windbnb" />
                  <div className='titleImgFi'>Windbnb</div>
                </div>
              </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
