import { Injectable } from '@nestjs/common';
import { GetUserEvent } from './models/events/get-user.event';

@Injectable()
export class AppService {
  private readonly users: Array<{ userId: string, stripeUserId: string }> = [
    { userId: '1', stripeUserId: 'cus_100' },
    { userId: '2', stripeUserId: 'cus_101' },
  ];

  constructor() { }

  getUser(data: GetUserEvent) {
    const foundUser = this.users.find((user) => user.userId === data.userId);

    console.log('foundUser', foundUser)

    return foundUser;
  }
}
