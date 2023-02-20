import ReactDOM from "react-dom";

const Backdrop = () => {
    return (
        <div className='absolute bg-slate-800 w-full h-full opacity-40 z-30'></div>
    );
};
const ModalOverlay = (props) => {
    return (
        <div className='h-80 w-1/2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-20 left-1/3 self-center z-40'>
            <div>{props.children}</div>
        </div>
    );
};

const forPortal = document.getElementById("overlay");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, forPortal)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                forPortal
            )}
        </>
    );
};

export default Modal;
