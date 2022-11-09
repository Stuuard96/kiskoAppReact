import Image from 'next/image';
import { formatearDinero } from '../helpers';
import { useKiosko } from '../hooks/useKiosko';

export const ResumenProducto = ({ producto }) => {
  const { handleEditarPedido, handleEliminarPedido } = useKiosko();

  return (
    <div className="shadow mb-3 p-5 md:flex gap-8 items-center">
      <div className="md:w-3/12">
        <Image
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={producto.nombre}
          width={300}
          height={300}
        />
      </div>
      <div className="md:w-6/12 flex flex-col gap-1 my-3 md:my-0">
        <p className="text-2xl font-bold">{producto.nombre}</p>
        <p className="text-xl font-semibold">
          Cantidad:
          <span className="font-normal"> {producto.cantidad}</span>
        </p>
        <p className="text-xl font-bold text-amber-500">
          Precio: {formatearDinero(producto.precio)}
        </p>
        <p className="text-md font-semibold text-gray-600">
          Subtotal: {formatearDinero(producto.precio * producto.cantidad)}
        </p>
      </div>
      <div className="md:w-3/12">
        <button
          onClick={() => handleEliminarPedido(producto.id)}
          className="bg-red-700 hover:bg-red-800 text-white w-full font-bold py-2 px-4 rounded uppercase"
        >
          Eliminar
        </button>
        <button
          onClick={() => handleEditarPedido(producto.id)}
          className="bg-amber-500 hover:bg-amber-600 text-white w-full font-bold py-2 px-4 mt-3 rounded uppercase"
        >
          Editar
        </button>
      </div>
    </div>
  );
};
