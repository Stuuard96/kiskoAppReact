import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Slide, toast } from 'react-toastify';
import axios from 'axios';

export const kioskoContext = createContext();

export const KioskoProvider = ({ children }) => {
  const router = useRouter();
  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState({});
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const { data } = await axios.get('/api/categorias');
      setCategorias(data);
    };
    obtenerCategorias();
  }, []);

  useEffect(() => {
    if (categorias.length > 0) {
      setCategoriaActual(categorias[0]);
    }
  }, [categorias]);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.find((cat) => cat.id === id);
    setCategoriaActual(categoria);
    router.push('/');
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
    } else {
      setPedido([...pedido, producto]);
      toast.success('Guardado Correctamente', {
        autoClose: 3000,
        transition: Slide,
      });
    }
    setModal(false);
    handleSetProducto({});
  };

  const handleEditarPedido = (id) => {
    const productoEditado = pedido.find((pedidoState) => pedidoState.id === id);
    setProducto(productoEditado);
    setModal(!modal);
  };

  const handleEliminarPedido = (id) => {
    const pedidoActualizado = pedido.filter(
      (pedidoState) => pedidoState.id !== id
    );
    setPedido(pedidoActualizado);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();
    console.log('Orden colocada');
  };

  return (
    <kioskoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarPedido,
        handleEliminarPedido,
        handleSetProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
      }}
    >
      {children}
    </kioskoContext.Provider>
  );
};
