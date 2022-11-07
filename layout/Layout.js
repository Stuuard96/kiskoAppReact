import Head from 'next/head';
import { Sidebar } from '../components/Sidebar';
import Modal from 'react-modal';
import { useKiosko } from '../hooks/useKiosko';
import { ModalProducto } from '../components/ModalProducto';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',
    // width: '80%',
    // height: '80%',
  },
};

Modal.setAppElement('#__next');

export default function Layout({ children, pagina }) {
  const { modal } = useKiosko();

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
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
    </>
  );
}
