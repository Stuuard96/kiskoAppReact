import Image from 'next/image';
import { formatearDinero } from '../helpers';

export const Producto = ({ producto }) => {
  console.log(producto);
  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3 flex flex-col items-center">
      <Image
        src={`/assets/img/${imagen}.jpg`}
        alt={nombre}
        width={350}
        height={350}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold leading-tight">{nombre}</h3>
        <p className="mt-2 font-black text-3xl text-amber-500">
          {formatearDinero(precio)}
        </p>
      </div>
    </div>
  );
};
