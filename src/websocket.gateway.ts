import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(0, { namespace: 'ws', transports: ['websocket'], cors: { origin: '*' } })
export class WSGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() 
  private server: Server;

  afterInit(server: Server) {
    console.log('WebSocket server initialized');
  }

  handleSubscribe(client: Socket, ...args: any[]) {
    console.log('WebSocket client subscribed', client.id);
  }

  handleUnsubscribe(client: Socket) {
    console.log('WebSocket client unsubscribed', client.id);
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log('WebSocket connection established', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('WebSocket connection closed', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): void {
    console.log('WebSocket message received', data);
    this.server.emit('message', `Echo: ${data}`); // Broadcast message to all clients
  }
};