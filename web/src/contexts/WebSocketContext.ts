import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:9002");
const WebSocketContext = createContext(socket);
const WebSocketProvider = WebSocketContext.Provider;

export { socket, WebSocketContext, WebSocketProvider };
