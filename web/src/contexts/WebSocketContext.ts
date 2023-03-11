import { createContext } from "react";
import { io } from "socket.io-client";

//Add the 'transports' property in order to let browsers that do not support websocket to work with an alternative
const socket = io("http://localhost:9001", {
  transports: ["websocket", "polling", "flashsocket"],
});
const WebSocketContext = createContext(socket);
const WebSocketProvider = WebSocketContext.Provider;

export { socket, WebSocketContext, WebSocketProvider };
