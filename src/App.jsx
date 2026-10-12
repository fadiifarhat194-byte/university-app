import { useState } from 'react'
import heroImg from './assets/hero.png'
import myimg from './assets/me.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const nom ="Farhat";
  const prenom ="Fadi";
  const email ="fadiifarhat194@gmail.com"
  const tel =123456789
  const Filière ="Génie Logiciel et Système d'Information"
  const Niveau = 2
  const Groupes ="GLSI2C-G1"
  const Ville ="mahdia"
  return (
  <>
   <div>
    <img className="myimg" src={myimg}/>
    <h1>
      Fiche Etudiant
    </h1>
    <h3>
      nom et prenom :{nom} {prenom}
    </h3><h3>
      Email : {email}
    </h3><h3>
     téléphone : {tel}
    </h3><h3>
      Filière : {Filière}
    </h3><h3>
      Niveau :{Niveau}
    </h3>
    <h3>
      Groupes :{Groupes}
    </h3><h3>
      Ville :{Ville}
    </h3>
    <button>Contacter</button>
   </div>
    </>
  )
}


export default App
