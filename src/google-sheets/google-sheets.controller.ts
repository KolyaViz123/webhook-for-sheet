import { Body, Controller, Get, Post } from '@nestjs/common';
import { GoogleSheetsService } from './google-sheets.service';

@Controller('google-sheets')
export class GoogleSheetsController {
    constructor(private readonly googleSheetsService: GoogleSheetsService){}

    @Get('read')
    async readSheet(){
        return this.googleSheetsService.readSheet()
    }

    @Post('webhook')
    async handleWebhook(@Body() data: any) {
        console.log('Received data: ', data);

        return { message: 'Data received successfully'}
    }
}
