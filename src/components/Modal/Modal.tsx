import c from './Modal.module.scss';
import React from 'react';

type ModalProps = {
   children: React.ReactNode;
   visible: boolean;
   setVisible: (state: boolean) => void;
};

export const Modal = ({ children, visible, setVisible }: ModalProps) => {
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
            <div className={c.modal__content}>
               {children}
               <img
                  className={c.modal__close}
                  onClick={closeModal}
                  src='src/assets/icons/close.svg'
                  alt='close'
               />
            </div>
         </div>
      </>
   );
};
