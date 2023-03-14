import { io, Socket } from "socket.io-client";
import ConfigValues from "../../utilities/ConfigValues";

const ListenerService: Socket = io(ConfigValues.EmailListenerSocketURL, {
  transports: ["websocket", "polling", "flashsocket"],
});

export default ListenerService;
