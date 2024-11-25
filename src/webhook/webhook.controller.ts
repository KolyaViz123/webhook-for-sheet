import { Body, Controller, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  onGoogleSHeetsEdit(@Body() body: any) {
    return this.webhookService.onGoogleSHeetsEdit(body);
  }
}
