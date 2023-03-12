import { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "../contexts/WebSocketContext";

//Check this video to know how to configure the websocket server the cors to allow this client to get the information from websocket:https://youtu.be/7mm2xUzjomk?t=771
export function WebSocketReceiver() {
  const [newEmail, setNewEmail] = useState(null);
  const socket = useContext(WebSocketContext);
  useEffect(() => {
    socket.on("newEmail", (email) => {
      setNewEmail(email);
      console.log(email);
    });
    return () => {
      socket.off("newEmail");
    };
  }, []);
  return (
    <div className=" text-red-600">
      {newEmail ? newEmail["from"] : "No messages"}
    </div>
  );
}
