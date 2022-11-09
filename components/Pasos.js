import { useRouter } from 'next/router';

const pasos = [
  { paso: 1, nombre: 'Menú', url: '/' },
  { paso: 2, nombre: 'Resumen', url: '/resumen' },
  { paso: 3, nombre: 'Datos y Total', url: '/total' },
];

export const Pasos = () => {
  const router = useRouter();

  const calcularProgreso = () => {
    const totalPasos = pasos.length;
    switch (router.pathname) {
      case '/':
        return 100 / totalPasos;
      case '/resumen':
        return (100 / totalPasos) * 2;
      case '/total':
        return (100 / totalPasos) * 3;
      default:
        return 0;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url, undefined, { scroll: false });
            }}
            className="text-2xl font-bold"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};
