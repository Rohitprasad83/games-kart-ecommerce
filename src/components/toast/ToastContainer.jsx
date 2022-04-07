import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export function ToastContainerCustom() {
  return (
    <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      className="text__md"
    />
  )
}
