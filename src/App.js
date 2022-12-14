import bank from './assets/argentbank.PNG'
import fisheyes from './assets/fisheyes.PNG'
import game from './assets/gameOn.PNG'
import hrnet from './assets/hrnet.PNG'
import plat from './assets/les petits plats.PNG'
import maquette from './assets/maquetteFigma.PNG'
import food from './assets/ohmyfood.PNG'
import reservia from './assets/reservia.PNG'
import sport from './assets/sporsee.PNG'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio</h1>
        <div className="alignement">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_13_21092022/"
            className="link"
          >
            <img src={bank} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_6_10112021/"
            className="link"
          >
            <img src={fisheyes} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_4_07102021/"
            className="link"
          >
            <img src={game} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_14_11102022/#/"
            className="link"
          >
            <img src={hrnet} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_7_02032022/"
            className="link"
          >
            <img src={plat} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/file/dN1UCf3B4ZMNoPybYw6nmM/Maquette-Learn%40Home?node-id=0%3A1&t=DQMkCjf2ErpOIPQF-0"
            className="link"
          >
            <img src={maquette} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_3_10092021/"
            className="link"
          >
            <img src={food} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_2_09082021/"
            className="link"
          >
            <img src={reservia} alt="moniteur" className="taille" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://citymer.github.io/JeromeMercier_12_19082022/#/home/12"
            className="link"
          >
            <img src={sport} alt="moniteur" className="taille" />
          </a>
        </div>
      </header>
    </div>
  )
}

export default App
