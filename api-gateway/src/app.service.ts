import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './models/dtos/create-order.dto';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './models/events/order-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE')
    private readonly billingClient: ClientKafka
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ price, userId }: CreateOrderDto) {
    const orderCreatedEvent = new OrderCreatedEvent('1', userId, price);

    console.log(`\nPublishing in topic "order_created"':`, orderCreatedEvent.toString(), '...');

    this.billingClient.emit(
      'order_created',
      orderCreatedEvent
    );

    console.log('Published\n');
  }
}
