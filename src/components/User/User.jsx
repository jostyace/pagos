import { MapPinIcon } from "@heroicons/react/24/outline"

export const User = ({detalles, onClick, longitude, latitude, nombre, telefono, direccion }) => {

  const handleClick = () => {
    const url = `https://wa.me/${telefono}`;
    window.open(url, '_blank');
  };

  const abrirLocation = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
<li className="bg-white w-11/12 rounded-lg shadow-md p-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Nombre: {nombre}</h2>
          <p className="text-gray-600">Dirección: {direccion}</p>
          <p className="text-gray-600">Teléfono: {telefono}</p>
        </div>
        <div className="flex justify-between gap-2">
          <button onClick={onClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded transition duration-300 ease-in-out">{detalles}</button>
          <div className="flex gap-2">
            <button onClick={abrirLocation}  className=" bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 mt-4 rounded transition duration-300 ease-in-out"><MapPinIcon className="w-[20px]"/></button>
            <button className=" bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mt-4 rounded transition duration-300 ease-in-out">
            <svg onClick={handleClick} className='w-[20px] h-[20px] stroke-white fill-white'>
                  <use href="/whatsapp.svg#whatsapplogo" />
                </svg>
            </button>
          </div>
        </div>
      </li>  )
}
