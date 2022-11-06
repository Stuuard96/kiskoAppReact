export const formatearDinero = (cantidad) => {
  return new Intl.NumberFormat('en-En', {
    style: 'currency',
    currency: 'USD',
  }).format(cantidad);
};
