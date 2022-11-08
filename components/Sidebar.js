import Image from 'next/image';
import { useKiosko } from '../hooks/useKiosko';
import { Categoria } from './Categoria';

export const Sidebar = () => {
  const { categorias } = useKiosko();

  return (
    <>
      <Image
        width={200}
        height={200}
        style={{ margin: '0 auto' }}
        src="/assets/img/logo.svg"
        alt="logo"
      />
      <nav className="mt-5 list-none">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};
