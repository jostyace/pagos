import { useState } from "react";
import fs from "fs";
import { MapPinIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const NewUser = ({setNewModal}) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ubicacion, setUbicacion] = useState({ latitude: "", longitude: "" });
  const [referencia, setReferencia] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const nuevoUsuario = {
        nombre,
        telefono,
        direccion,
        ubicacion,
        referencia,
      };

      let usuarios = [];
      if (fs.existsSync("./usuarios.json")) {
        const data = fs.readFileSync("/usuarios.json", "utf8");
        usuarios = JSON.parse(data);
        console.log("Usuarios leídos:", usuarios);
      }

      usuarios.push(nuevoUsuario);

      fs.writeFileSync("./usuarios.json", JSON.stringify(usuarios));

      console.log("Usuario guardado correctamente:", nuevoUsuario);
    } catch (error) {
      console.error("Error al guardar el usuario:", error.message);
      setError(
        "Error al guardar el usuario. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  const obtenerUbicacion = async () => {
    try {
      // Obtener la ubicación actual del dispositivo del usuario
      const position = await getCurrentPosition();
      setUbicacion({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    } catch (error) {
      console.error("Error al obtener la ubicación:", error.message);
      setError(
        "No se pudo obtener la ubicación. Por favor, asegúrate de que la geolocalización esté habilitada en tu dispositivo."
      );
    }
  };

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocalización no soportada por este navegador."));
      }
    });
  };

  return (
    <div className="w-screen h-screen fixed items-center  justify-center flex top-0 z-50 bg-[#0101019c]">
      <div className="relative rounded-2xl w-11/12 h-4/5 p-10 bg-white">
        <h2 className=" font-black text-3xl p-5 w-full text-center">
          Crear Nuevo Usuario
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form  onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nombre"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Teléfono"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dirección"
                required
              />
            </div>
            <div className="flex gap-5">
              <div>
                <input
                  type="tel"
                  id="longitude"
                  value={ubicacion.longitude}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="longitud"
                  required
                />
              </div>
              <div>
                <input
                  type="url"
                  id="latitude"
                  value={ubicacion.latitude}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="latitud"
                  required
                />
              </div>
              <button
                onClick={obtenerUbicacion}
                type="button"
                className="relative w-[60px] flex justify-center items-center rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <MapPinIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div>
              <input
                type="text"
                id="referencia"
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Referencia"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
                onClick={()=>setNewModal(false)}
                type="button"
                className="absolute w-[40px] top-[10px] right-[10px]  flex justify-center items-center rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              ><XMarkIcon/> </button>
        </form>
      </div>
    </div>
  );
};
