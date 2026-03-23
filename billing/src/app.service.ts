import { Inject, Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './models/events/order-created.event';
import { ClientKafka } from '@nestjs/microservices';
import { GetUserEvent } from './models/events/get-user.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly authClient: ClientKafka
  ) { }

  handleOrderCreated(orderCreatedEvent: OrderCreatedEvent) {
    console.log(`\nOrder created:`, orderCreatedEvent, '\n');

    this.authClient.send(
      'get_user',
      new GetUserEvent(orderCreatedEvent.userId)
    ).subscribe((user) => {
      console.log('user received', user);

      console.log(`Billing user with stripe ID ${user.stripeUserId} a price of $${orderCreatedEvent.price}...`);
    });
  }
}
