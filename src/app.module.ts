import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Row } from './models/row.model';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    WebhookModule,
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: process.env.DATABASE_HOST, 
    //   port: parseInt(process.env.DATABASE_PORT), 
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    //   models: [Row],
    //   autoLoadModels: true,
    //   synchronize: true, 
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
