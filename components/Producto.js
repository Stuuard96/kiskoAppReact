import Image from 'next/image';
import { formatearDinero } from '../helpers';
import { useKiosko } from '../hooks/useKiosko';

export const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useKiosko();
  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3 ">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={nombre}
        width={300}
        height={300}
        className="w-full  object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold leading-tight">{nombre}</h3>
        <p className="mt-2 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          className="bg-amber-500 hover:bg-amber-600 w-full mt-4 p-2 border-none outline-none uppercase text-white font-bold rounded"
          onClick={() => {
            handleSetProducto(producto);
            handleChangeModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
