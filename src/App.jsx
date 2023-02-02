import React from 'react';
import { Carrousel } from './Components/Carrousel';
import { NavBar } from "./Components/NavBar";
import { AboutMe} from "./Components/AboutMe"
import { Lenguajes } from "./Components/Lenguajes"
import { Services } from "./Components/Services"
import { Contacto } from './Components/Contacto';



function App() {
  return (
    <>
      <div>
      <nav><NavBar /></nav>
        <div className='Container' >
          <Carrousel />
        </div>
        <div className='sections'>
        <AboutMe/>
        </div>
        <div className='sections'>
        <Services/>
        </div>
        <div className='sections'>
        <Lenguajes/>
        </div>
        <div className='sections'>
        <Contacto/>
        </div>
      </div>
    </>

  );
}

export default App;
