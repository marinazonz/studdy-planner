import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div
            className='absolute bg-slate-600 inset-y-0 w-full h-screen opacity-80 z-40'
            onClick={props.onClose}
        ></div>
    );
};
const ModalOverlay = (props) => {
    return (
        <div className='h-4/5 w-10/12 md:w-8/12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-20 left-10 md:left-48 self-center z-40'>
            <div>{props.children}</div>
        </div>
    );
};

const forPortal = document.getElementById("overlay");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
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
