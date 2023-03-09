import Modal from "./Modal";

const Popup = (props) => {
    return (
        <Modal>
            <div className='text-center flex flex-col justify-center self-center gap-5 max-w-sm'>
                <p className='font-semibold text-xl'>
                    Form was successfully submitted
                </p>
                <button
                    className='max-w-sm rounded-lg shadow-md bg-blue-300 font-semibold hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:transition-all duration-200 hover:text-sm hover:border'
                    onClick={props.onClose}
                >
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default Popup;
