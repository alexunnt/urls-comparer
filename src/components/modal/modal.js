import { useEffect } from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import ModalOverlay from '../modal-overlay/modal-overlay';

import modalStyles from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('root');

function Modal({ closeModal, children }) {
    useEffect(() => {
        const handleEsc = (e) => {
            e.key === 'Escape' && closeModal();
        };

        document.addEventListener('keydown', handleEsc);

        return () => {
            document.removeEventListener('keydown', handleEsc);
        }
    }, [closeModal]);

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={closeModal} />
            <div className={modalStyles.modal}>
                <div className={modalStyles.header}>
                    <h2 className='text text_type_main-medium'>Здравствуйте, дорогая и.о. секретаря!</h2>
                    <CloseIcon className={modalStyles.icon} type='primary' onClick={closeModal} />
                </div>
                <div className={modalStyles.content}>
                    {children}
                </div>
            </div>
        </>
        , modalRoot
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default Modal;