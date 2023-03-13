import { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { IEmail } from "../interfaces";
import ConfigValues from "../utilities/ConfigValues";

let socket: Socket;

/**
 * Executes a custom callback when when a new email arrives. Internally configures the email of the current User account.
 *
 */
const useNewEmailNotification = (callback: (newEmail: IEmail) => void) => {
  if (!socket) {
    socket = io(ConfigValues.EmailListenerSocketURL, {
      transports: ["websocket", "polling", "flashsocket"],
    });
  }

  useEffect(() => {
    socket.on("newEmail", callback);
    return () => {
      socket.off("newEmail");
    };
  }, []);
};

export default useNewEmailNotification;
