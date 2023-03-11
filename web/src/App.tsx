import "./App.css";
import { socket, WebSocketProvider } from "./contexts/WebSocketContext";
import { WebSocketReceiver } from "./components/WebSocketReceiver";

function App() {
  return (
    <WebSocketProvider value={socket}>
      <WebSocketReceiver />
    </WebSocketProvider>
  );
}

export default App;
