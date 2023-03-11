import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway(9002, { cors: '*' })
//@WebSocketGateway({ cors: '*' })
export class IncomingEmailGatewayService implements OnModuleInit {
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id, 'CONNECTED!!');
    });
  }
}
