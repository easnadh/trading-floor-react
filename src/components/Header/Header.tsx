import Modal from '../Modal/Modal.tsx';
import AdForm from '../Ad/AdForm/AdForm.tsx';
import { useState } from 'react';
import c from './_header.module.scss';

const Header = () => {
   const [modal, setModal] = useState(false);

   return (
      <>
         <header>
            <img alt='logo' />
            <button className={c.header__btn} onClick={() => setModal(true)}>
               Создать объявление
            </button>
            <Modal visible={modal} setVisible={setModal}>
               <AdForm />
            </Modal>
         </header>
      </>
   );
};

export default Header;
