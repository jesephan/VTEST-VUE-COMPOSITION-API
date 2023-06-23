import type { InjectionKey } from 'vue';
import ToastComposable from '../Interfaces/ToastComposable';

export const toastInjectionKey: InjectionKey<ToastComposable> =
  Symbol('CUSTOM_TOAST');
