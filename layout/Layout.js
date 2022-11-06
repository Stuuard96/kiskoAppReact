import Head from 'next/head';
import { Sidebar } from '../components/Sidebar';

export default function Layout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="kiosko cafetería" />
      </Head>
      <div className="sm:flex">
        <aside className="sm:w-6/12 md:w-4/12 xl:w-1/4 2xl:w-2/10">
          <Sidebar />
        </aside>
        <main className="sm:w-6/12 md:w-8/12 xl:w-3/4 2xl:w-8/10 sm:h-screen sm:overflow-y-scroll">
          <div className="p-8">{children}</div>
        </main>
      </div>
    </>
  );
}
