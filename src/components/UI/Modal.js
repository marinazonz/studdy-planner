import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div
            className='fixed bg-slate-600/80 inset-0 p-5 z-10'
            onClick={props.onClose}
        />
    );
};
const ModalOverlay = (props) => {
    return (
        <div className='flex w-full fixed justify-center z-10 pointer-events-none'>
            <div className='rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex overflow-scroll justify-center self-center sm:max-w-xl p-7 pointer-events-auto'>
                {props.children}
            </div>
        </div>
    );
};

const forPortal = document.getElementById("overlay");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose}></Backdrop>,
                forPortal
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                forPortal
            )}
        </>
    );
};

export default Modal;
