import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const kioskoContext = createContext();

export const KioskoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});

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

  return (
    <kioskoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
      }}
    >
      {children}
    </kioskoContext.Provider>
  );
};
