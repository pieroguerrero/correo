import { useEffect } from "react";
//import { io, Socket } from "socket.io-client";
import { IEmail } from "../interfaces";
import ListenerService from "../services/listener-service/ListenerService";
//import ConfigValues from "../utilities/ConfigValues";

/**
 * Executes a custom callback when when a new email arrives. Internally configures the email of the current User account.
 *
 */
const useNewEmailNotification = (callback: (newEmail: IEmail) => void) => {
  useEffect(() => {
    //Subscribe to the event
    ListenerService.on("newEmail", callback);
    return () => {
      ListenerService.off("newEmail");
    };
  }, []);
};

export default useNewEmailNotification;
