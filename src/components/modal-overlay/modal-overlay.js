import modalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay({ onClick }) {
    return (
        <div className={modalOverlayStyles.overlay} onClick={onClick}></div>
    )
}

export default ModalOverlay;