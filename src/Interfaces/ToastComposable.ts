import Toast from './Toast';

export default interface ToastComposable {
  create(type: string, msg: string, durationInMilliseconds?: number): Toast;
  deleteAll(): void;
}
