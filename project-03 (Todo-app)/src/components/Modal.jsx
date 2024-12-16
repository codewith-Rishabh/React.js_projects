import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              {/* close button for Modal */}
              <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;





















// import React from 'react'
// import { AiOutlineClose } from 'react-icons/ai'
// import {createPortal} from "react-dom";

// const Modal = ({ onClose, isOpen, children}) => {
//   return createPortal(
//     <>
//     {isOpen &&
//     <>
//       <div className='min-h-[200px] max-w-[80%] bg-white m-auto relative z-50  p-3'>

//       <div className='flex justify-end'>
//         <AiOutlineClose
//         onClick= {onClose}
//         className='text-3xl'/>
//       </div>
//        {children}
//       </div>
       
//       <div
//       onClick= {onClose}
//       className='absolute top-0 z-40 h-screen w-screen backdrop-blur '/>
//     </>
//       }
//     </>,
//     document.getElementById("modal-root")
//   );
// }

// export default Modal