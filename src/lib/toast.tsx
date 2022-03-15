import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const CustomToastContaier: React.FC = () => (
  <ToastContainer
    position='bottom-right'
    autoClose={4000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export const notifyError = () => {
  toast.error('Something went wrong', {
    theme: 'colored',
    position: 'bottom-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default CustomToastContaier;
