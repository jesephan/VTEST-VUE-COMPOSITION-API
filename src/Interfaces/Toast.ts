export default interface Toast {
  active: boolean;
  id: number;
  type: string;
  message: string;
  durationInMilliseconds: number;
}
