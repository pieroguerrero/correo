import { createContext } from "react";
import { io } from "socket.io-client";
import ConfigValues from "../utilities/ConfigValues";

interface IWebSocketContext {
  children: JSX.Element;
}

//Add the 'transports' property in order to let browsers that do not support websocket to work with an alternative
console.log("WebSockerContext has loaded the socket=io(...)");

const socket = io(ConfigValues.EmailListenerSocketURL, {
  transports: ["websocket", "polling", "flashsocket"],
});
const WebSocketContext = createContext(socket);

function WebSocketProvider({ children }: IWebSocketContext) {
  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
}

export { WebSocketContext, WebSocketProvider };
