import Image from 'next/image';
import { useKiosko } from '../hooks/useKiosko';

export const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual } = useKiosko();
  const { nombre, id, icono } = categoria;
  return (
    <div
      onClick={() => handleClickCategoria(id)}
      className={`${
        categoriaActual?.id === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 p-4 w-full border border-gray-200 cursor-pointer hover:bg-amber-400`}
    >
      <Image
        width={50}
        height={50}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Imagen de ${nombre}`}
      />
      <p className="text-xl font-bold">{nombre}</p>
    </div>
  );
};
