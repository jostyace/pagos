import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { RadioGroup } from "@headlessui/react";

const tiposDePago = ["Diario", "Semanal", "Quincenal"];

export const NuevoCredito = ({ setNuevoCredito }) => {
  const [monto, setMonto] = useState("");
  const [tipoPago, setTipoPago] = useState(tiposDePago[0]);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const nuevoPago = {
        monto,
        tipoPago,
      };

      // Aquí puedes realizar la lógica para guardar el pago en el servidor
      console.log("Pago guardado correctamente:", nuevoPago);
    } catch (error) {
      console.error("Error al guardar el pago:", error.message);
      setError(
        "Error al guardar el pago. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="w-screen h-screen fixed items-center justify-center flex top-0 z-50 bg-[#0101019c]">
      <div className="relative rounded-2xl w-11/12 h-4/5 p-10 bg-white">
        <h2 className="font-black text-3xl p-5 w-full text-center">
          Registrar Nuevo Pago
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="monto"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Monto"
                required
              />
            </div>
            <div>
              <RadioGroup value={tipoPago} onChange={setTipoPago}>
                <RadioGroup.Label className="sr-only">Tipo de Pago</RadioGroup.Label>
                <div className="space-y-2">
                  {tiposDePago.map((tipo) => (
                    <RadioGroup.Option
                      key={tipo}
                      value={tipo}
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
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? 'text-white' : 'text-gray-900'
                                  }`}
                                >
                                  {tipo}
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <CheckIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <button
            onClick={() => setNuevoCredito(false)}
            type="button"
            className="absolute w-[40px] top-[10px] right-[10px]  flex justify-center items-center rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <XMarkIcon />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
