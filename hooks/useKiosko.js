import { useContext } from 'react';
import { kioskoContext } from '../context/kioskoProvider';

export const useKiosko = () => useContext(kioskoContext);
