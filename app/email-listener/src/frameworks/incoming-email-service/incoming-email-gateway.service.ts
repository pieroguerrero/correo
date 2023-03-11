import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { EnvConfigFile } from 'src/configuration';

@WebSocketGateway(Number(EnvConfigFile.webSocketServicePort.getValue()), {
  cors: { origin: '*' },
})
export class IncomingEmailGatewayService implements OnModuleInit {
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id, 'CONNECTED!!');
    });
  }
}
