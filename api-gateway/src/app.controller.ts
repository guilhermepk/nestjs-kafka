import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderDto } from './models/dtos/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('orders/create')
  createOrder(
    @Body() body: CreateOrderDto
  ) {
    return this.appService.createOrder(body);
  }
}
