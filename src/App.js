import bank from './assets/argentbank.PNG'
import fisheyes from './assets/fisheyes.PNG'
import game from './assets/gameOn.PNG'
import hrnet from './assets/hrnet.PNG'
import plat from './assets/les petits plats.PNG'
import maquette from './assets/maquetteFigma.PNG'
import food from './assets/ohmyfood.PNG'
import reservia from './assets/reservia.PNG'
import sport from './assets/sporsee.PNG'
import github from './assets/GitHub-LogoPNG1.png'
import cv from './assets/CVweb.PNG'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [backgroundColor, setBackroundColor] = useState('black')
  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="contentPortfolio">
          <p>
            <span>Portfolio</span>
          </p>
        </div>
        <div className="contentButton black">
          <button className="button" onClick={() => setBackroundColor('black')}>
            BLACK
          </button>
          <button
            className="button"
            onClick={() => setBackroundColor('#640808')}
          >
            RED
          </button>
          <button
            className="button"
            onClick={() => setBackroundColor('#0d320d')}
          >
            GREEN
          </button>
        </div>
        <div
          className="alignement"
          style={{ backgroundColor: backgroundColor }}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/cv/"
            className="link"
          >
            <img src={cv} alt="moniteur" className="taille" />
            <h2>CV version web</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_13_21092022/"
            className="link"
          >
            <img src={bank} alt="moniteur" className="taille" />
            <h2>
              Utiliser une API pour un compte utilisateur bancaire avec React
            </h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_6_10112021/"
            className="link"
          >
            <img src={fisheyes} alt="moniteur" className="taille" />
            <h2>
              Créer un site accessible pour une plateforme de photographes
            </h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_4_07102021/"
            className="link"
          >
            <img src={game} alt="moniteur" className="taille" />
            <h2>Créer une landing page Javascript</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_14_11102022/#/"
            className="link"
          >
            <img src={hrnet} alt="moniteur" className="taille" />
            <h2>Faire migrer une librairie jQuery vers React</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_7_02032022/"
            className="link"
          >
            <img src={plat} alt="moniteur" className="taille" />
            <h2>Développer un algorithme de recherche en javascript</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/file/dN1UCf3B4ZMNoPybYw6nmM/Maquette-Learn%40Home?node-id=0%3A1&t=DQMkCjf2ErpOIPQF-0"
            className="link"
          >
            <img src={maquette} alt="moniteur" className="taille" />
            <h2>Définir les besoins pour une app de soutien scolaire</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_3_10092021/"
            className="link"
          >
            <img src={food} alt="moniteur" className="taille" />
            <h2>Dynamiser une page web avec des animations CSS</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_2_09082021/"
            className="link"
          >
            <img src={reservia} alt="moniteur" className="taille" />
            <h2>Transformer une maquette en site web avec HTML & CSS</h2>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_12_19082022/#/home/12"
            className="link"
          >
            <img src={sport} alt="moniteur" className="taille" />
            <h2>Développer un tableau de bord d'analytics avec React</h2>
          </a>
        </div>
        <div className="contentGithub">
          <a href="https://github.com/citymer?tab=repositories">
            <img src={github} alt="lien github" className="github" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
