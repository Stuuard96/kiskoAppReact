import { useCallback, useEffect } from 'react';
import { formatearDinero } from '../helpers';
import { useKiosko } from '../hooks/useKiosko';
import Layout from '../layout/Layout';

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useKiosko();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total y Confirmar Pedido">
      <h1 className="text-3xl font-bold">Total y Confirmar Pedido</h1>
      <p className="text-xl py-6">Confirma tu pedido a continuación</p>
      <form onSubmit={colocarOrden}>
        <div>
          <label
            className="block uppercase text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded-md  w-full lg:w-4/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <p className="text-xl">
            Total a pagar:{' '}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? 'bg-gray-300'
                : 'bg-amber-500 hover:bg-amber-600'
            }   text-center px-5 py-2 cursor-pointer text-white uppercase font-bold`}
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
