import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import { MapLink } from './components/MapLink/MapLink';
import { NewUser } from './components/NewUser/NewUser';
import { Search } from './components/Search/Search';
import { User } from './components/User/User'
import { Mapa } from './components/Mapa/Mapa';
import { NuevoCredito } from './components/NuevoCredito/NuevoCredito';
import { VerCredito } from './components/VerCredito/VerCredito';

function App() {
  const [newModal, setNewModal] = useState(false)
  const [nuevoCredito, setNuevoCredito] = useState(false)
  const [verCredito, setVerCredito] = useState(false)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(exampleUsers);
  }, []);

  const saveUsersToLocalStorage = (updatedUsers) => {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const exampleUsers = [
    {
      nombre: 'Juan Pérez',
      telefono: '+593987654321',
      direccion: 'Calle Principal 123',
      longitud: -80.123456,
      latitud: -2.987654,
      referencia: 'Frente al parque',
      detalles: 'Otorgar Crédito',
      onClick: () => setNuevoCredito(true)
    },
    {
      nombre: 'María García',
      telefono: '+593987654322',
      direccion: 'Avenida Central 456',
      longitud: -80.234567,
      latitud: -2.876543,
      referencia: 'Cerca del centro comercial',
      detalles: 'Ver Crédito',
      onClick: () => setVerCredito(true)
    },
    {
      nombre: 'Carlos Rodríguez',
      telefono: '+593987654323',
      direccion: 'Calle Secundaria 789',
      longitud: -80.345678,
      latitud: -2.765432,
      referencia: 'Al lado del banco',
      detalles: 'Otorgar Crédito',
      onClick: () => setNuevoCredito(true)
    },
    {
      nombre: 'Ana Martínez',
      telefono: '+593987654324',
      direccion: 'Ruta Principal 012',
      longitud: -80.456789,
      latitud: -2.654321,
      referencia: 'En la esquina',
      detalles: 'Ver Crédito',
      onClick: () => setVerCredito(true)
    },
    {
      nombre: 'Pedro Gómez',
      telefono: '+593987654325',
      direccion: 'Boulevard Central 345',
      longitud: -80.567890,
      latitud: -2.543210,
      referencia: 'Frente a la iglesia',
      detalles: 'Otorgar Crédito',
      onClick: () => setNuevoCredito(true)
    },
    {
      nombre: 'Luisa López',
      telefono: '+593987654326',
      direccion: 'Calle Central 678',
      longitud: -80.678901,
      latitud: -2.432109,
      referencia: 'Junto al parqueadero',
      detalles: 'Ver Crédito',
      onClick: () => setVerCredito(true)
    },
    {
      nombre: 'Javier Sánchez',
      telefono: '+593987654327',
      direccion: 'Avenida Principal 901',
      longitud: -80.789012,
      latitud: -2.321098,
      referencia: 'Detrás del supermercado',
      detalles: 'Otorgar Crédito',
      onClick: () => setNuevoCredito(true)
    }
  ];

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
  };

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
          {users.map((user, index) => (
            <User
              key={index}
              latitude={user.latitud}
              longitude={user.longitud}
              detalles={user.detalles}
              telefono={user.telefono}
              onClick={user.onClick}
              nombre={user.nombre}
              direccion={user.direccion}
              referencia={user.referencia}
            />
          ))}
        </ul>
        <MapLink latitude={latitude} longitude={longitude} />
        {newModal && <NewUser setNewModal={setNewModal} addUser={addUser} />}
        {nuevoCredito && <NuevoCredito setNuevoCredito={setNuevoCredito}/>}
        {verCredito && <VerCredito setVerCredito={setVerCredito}/>}
        <Mapa longitude={longitude} latitude={latitude} zoom={zoom}/>
      </div>  </>
    )
}

export default App
