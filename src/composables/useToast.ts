import { inject } from 'vue';
import { toastInjectionKey } from '../constants/injectionKeys';
import ToastComposable from '../Interfaces/ToastComposable';

export function useToast(): ToastComposable {
  return inject(toastInjectionKey) as ToastComposable;
}
