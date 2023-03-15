import { useContext, useEffect } from "react";
import { UserAccountContext } from "../contexts/UserAccountContext";
import { IEmailListDTO } from "../dtos";
import ListenerService from "../services/listener-service/ListenerService";

/**
 * Executes a custom callback when when a new email arrives. Internally configures the email of the current User account.
 *
 */
const useNewEmailNotification = (
  callback: (newEmail: IEmailListDTO) => void
) => {
  const useAccount = useContext(UserAccountContext);

  useEffect(() => {
    //Subscribe to the event
    ListenerService.on(useAccount.email.trim().toLowerCase(), callback);
    return () => {
      ListenerService.off(useAccount.email.trim().toLowerCase());
    };
  }, []);
};

export default useNewEmailNotification;
