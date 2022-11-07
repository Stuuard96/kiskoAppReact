import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const kioskoContext = createContext();

export const KioskoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState({});
  const [categoriaActual, setCategoriaActual] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

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

  const handleClickCategoria = (id) => {
    const categoria = categorias.find((cat) => cat.id === id);
    setCategoriaActual(categoria);
  };

  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
    setPedido([...pedido, producto]);
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
      }}
    >
      {children}
    </kioskoContext.Provider>
  );
};
