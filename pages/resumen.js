import { ResumenProducto } from '../components/ResumenProducto';
import { useKiosko } from '../hooks/useKiosko';
import Layout from '../layout/Layout';

export default function Resumen() {
  const { pedido } = useKiosko();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-3xl font-bold">Resumen</h1>
      <p className="text-xl py-6">Aquí va el resumen</p>
      {pedido.length === 0 ? (
        <p className="text-xl py-6">No hay productos</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
