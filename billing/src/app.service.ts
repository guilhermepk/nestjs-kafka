import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './models/events/order-created.event';

@Injectable()
export class AppService {
  constructor() { }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log(`\nOrder created:`, orderCreatedEvent, '\n');
  }
}
