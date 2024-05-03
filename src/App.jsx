import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import { MapLink } from './components/MapLink/MapLink';
import { NewUser } from './components/NewUser/NewUser';
import { Search } from './components/Search/Search';
import { User } from './components/User/User'
import { Mapa } from './components/Mapa/Mapa';

function App() {
  const [newModal, setNewModal] = useState(false)
  const latitude = -2.2174673333358568; // Ejemplo de latitud
  const longitude = -80.85680016072722; // Ejemplo de longitud
  const zoom = 1;
  return (
    <>
    <Header setNewModal={setNewModal}/>
    <div className="bg-[#eaeaea] mx-auto py-8">
    
      <h1 className="text-3xl font-semibold text-center mb-6">Lista de Usuarios</h1>
      <ul className="flex flex-col justify-center items-center gap-6">
        <Search/>
        <User detalles='Otorgar Crédito' color='#339955'/>
        <User detalles='Otorgar Crédito' color='#339955' />
        <User detalles='Ver Crédito' color='#339955' />
        <User detalles='Otorgar Crédito' color='#339955' />
        <User detalles='Otorgar Crédito' color='#339955' />
        
      </ul>
      <MapLink latitude={latitude} longitude={longitude} />
      {newModal && <NewUser/>}
      <Mapa longitude={longitude} latitude={latitude} zoom={zoom}/>
  </div>

  </>
    )
}

export default App
