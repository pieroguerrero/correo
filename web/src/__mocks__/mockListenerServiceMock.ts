import { IEmailListDTO } from "../dtos";

let callbackEvent: null | ((newEmail: IEmailListDTO) => void) = null;
const mockListenerService = {
  on: (_eventName: string, callback: (newEmail: IEmailListDTO) => void) => {
    callbackEvent = callback;
  },
  emit: (_eventName: string, email: IEmailListDTO) => {
    if (callbackEvent) {
      callbackEvent(email);
    }
  },
  off: (_eventName: string) => {
    callbackEvent = null;
    return;
  },
};

export default mockListenerService;
