import c from './_modal.module.scss';
import React from 'react';

type ModalProps = {
   children: React.ReactElement | null;
   visible: boolean;
   setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, visible, setVisible }: ModalProps) => {
   const rootClasses = [c.modal];
   if (visible) {
      rootClasses.push(c.modal__active);
   }

   const closeModal = () => {
      setVisible(false);
   };

   return (
      <>
         <div className={rootClasses.join(' ')}>
            <button
               className={c.modal__close}
               type='button'
               onClick={closeModal}
            >
               <img src='src/assets/icons/close.svg' alt='close' />
            </button>
            <div className={c.modal__content}>{children}</div>
         </div>
      </>
   );
};

export default Modal;
