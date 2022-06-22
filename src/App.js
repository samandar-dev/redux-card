import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <Layout setModal={setModal}>
        <Products />
      </Layout>
      <Modal modal={modal} setModal={setModal} />
    </>
  );
}

export default App;
