import { Modal } from '../../Modal/Modal.tsx';
import { Create } from '../../Advertisement/Form/Create.tsx';
import { useState } from 'react';
import c from './Header.module.scss';
import { createPortal } from 'react-dom';

export const Header = () => {
   const [showModal, setShowModal] = useState(false);

   return (
      <>
         <header className={c.header}>
            <div className='container'>
               <img alt='logo' />
               <button
                  className={c.header__btn}
                  onClick={() => setShowModal(true)}
               >
                  Создать объявление
               </button>
               {showModal &&
                  createPortal(
                     <Modal
                        children={<Create />}
                        visible={showModal}
                        setVisible={setShowModal}
                     />,
                     document.body
                  )}
            </div>
         </header>
      </>
   );
};
