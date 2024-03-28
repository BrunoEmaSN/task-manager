import { Slide, type ToastOptions } from 'vue3-toastify'

export const toastConfig: ToastOptions = {
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  theme: 'dark',
  transition: Slide
}
