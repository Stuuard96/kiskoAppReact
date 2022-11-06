import Image from 'next/image';
import { useKiosko } from '../hooks/useKiosko';
import { Categoria } from './Categoria';

export const Sidebar = () => {
  const { categorias } = useKiosko();

  return (
    <>
      <Image width={100} height={100} src="/assets/img/logo.svg" alt="logo" />
      <nav className="mt-10 list-none">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};
