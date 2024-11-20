import { Module } from '@nestjs/common';
import { GoogleSheetsController } from './google-sheets.controller';
import { GoogleSheetsService } from './google-sheets.service';

@Module({
  providers: [GoogleSheetsService],
  controllers: [GoogleSheetsController]
})
export class GoogleSheetsModule {}
