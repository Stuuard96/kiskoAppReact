import Head from 'next/head';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { Sidebar } from '../components/Sidebar';
import { useKiosko } from '../hooks/useKiosko';
import { ModalProducto } from '../components/ModalProducto';
import 'react-toastify/dist/ReactToastify.css';
import { Pasos } from '../components/Pasos';

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
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-2/10">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-8/10 md:h-screen sm:overflow-y-auto">
          <div className="p-8">
            <Pasos />
            {children}
          </div>
        </main>
      </div>
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
}
