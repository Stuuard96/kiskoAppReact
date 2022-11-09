import { useEffect, useState } from 'react';
import { formatearDinero } from '../helpers';
import { useKiosko } from '../hooks/useKiosko';
import Image from 'next/image';

export const ModalProducto = () => {
  const {
    producto,
    handleChangeModal,
    handleAgregarPedido,
    pedido,
    handleSetProducto,
  } = useKiosko();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      );
      setEdicion(true);
      setCantidad(productoEdicion.cantidad);
    }
  }, [producto, pedido]);

  return (
    <>
      <div className="md:flex gap-8">
        <div className="md:w-2/6">
          <Image
            width={300}
            height={300}
            src={`/assets/img/${producto?.imagen}.jpg`}
            alt={producto?.nombre}
            //   className="w-full object-cover"
          />
        </div>
        <div className="md:w-4/6">
          <div className="flex justify-end">
            <button
              onClick={() => {
                handleChangeModal();
                handleSetProducto({});
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h1 className="text-2xl font-bold mt-4">{producto?.nombre}</h1>
          <p className="text-5xl font-black text-amber-500 mt-4">
            {formatearDinero(producto?.precio)}
          </p>
          <div className="flex gap-4 mt-5">
            <button
              type="button"
              onClick={() => {
                if (cantidad <= 1) return;
                setCantidad(cantidad - 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <p className="text-3xl">{cantidad}</p>
            <button
              type="button"
              onClick={() => {
                if (cantidad >= 5) return;
                setCantidad(cantidad + 1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <button
            className="bg-amber-500 hover:bg-amber-600 mt-4 px-5 py-2 border-none outline-none uppercase text-white font-bold rounded"
            onClick={() => {
              handleAgregarPedido({ ...producto, cantidad });
            }}
          >
            {edicion ? 'Guardar Cambios' : 'Agregar al Pedido'}
          </button>
        </div>
      </div>
    </>
  );
};
