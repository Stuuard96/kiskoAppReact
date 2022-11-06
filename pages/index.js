import { Producto } from '../components/Producto';
import { useKiosko } from '../hooks/useKiosko';
import Layout from '../layout/Layout';

export default function Home() {
  const { categoriaActual } = useKiosko();

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-bold">{categoriaActual?.nombre}</h1>
      <p className="text-xl py-6">
        Elige y personaliza tu pedido a continuación
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {categoriaActual?.productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
