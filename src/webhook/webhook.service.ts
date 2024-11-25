import { Injectable } from '@nestjs/common';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { UpdateWebhookDto } from './dto/update-webhook.dto';

@Injectable()
export class WebhookService {
  onGoogleSHeetsEdit(data) {
    console.log(data);
    console.log('test')

    return 'test complited';
  }
}
