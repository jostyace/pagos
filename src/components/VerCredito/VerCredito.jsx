import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";

export const VerCredito = ({ setVerCredito }) => {
  const [montoCredito] = useState(1000); // Ejemplo de monto de crédito
  const [montoPendiente] = useState(500); // Ejemplo de monto pendiente
  const [fechaConcesion] = useState("2024-05-03"); // Ejemplo de fecha de concesión
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

  const handleGuardar = () => {
    // Lógica para guardar las opciones seleccionadas
    console.log("Opciones seleccionadas:", opcionesSeleccionadas);
  };

  return (
    <div className="w-screen h-screen fixed items-center justify-center flex top-0 z-50 bg-[#0101019c]">
      <div className="relative flex flex-col gap-2 rounded-2xl w-11/12 !h-[95%] p-10 bg-white">
        <h2 className="font-black text-xl p-1 w-full text-center">
          Detalles del Crédito
        </h2>
        <div className="border flex border-gray-200  justify-center items-center rounded-lg">
          <div className="text-center">
            <h3 className="font-semibold text-sm">Monto del Crédito:</h3>
            <p>{montoCredito}</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-sm ">Monto Pendiente:</h3>
            <p>{montoPendiente}</p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-sm ">Fecha de Concesión:</h3>
            <p>{fechaConcesion}</p>
          </div>
        </div>
        <RadioGroup value={opcionesSeleccionadas} onChange={setOpcionesSeleccionadas}>
          <RadioGroup.Label className="sr-only">Días de Pago</RadioGroup.Label>
          <div className="grid grid-cols-6 gap-3 ">
            {Array.from({ length: 30 }, (_, index) => index + 1).map((opcion) => (
              <RadioGroup.Option
                key={opcion}
                value={opcion}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <div className="flex w-full items-center justify-center">
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium text-center ${
                        checked ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {opcion}
                    </RadioGroup.Label>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <button
          onClick={handleGuardar}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mt-6"
        >
          Guardar
        </button>
        <button
          onClick={() => setVerCredito(false)}
          className="absolute w-[40px] top-[10px] right-[10px]  flex justify-center items-center rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <XMarkIcon />
        </button>
      </div>
    </div>
  );
};
