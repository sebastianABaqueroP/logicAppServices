import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentModule } from './shipment/shipment.module';

@Module({
  imports: [
    // MongooseModule.forRoot(config.mongoUri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }),
    MongooseModule.forRoot('mongodb://localhost:27017/ppAcigol', {useNewUrlParser: true}),
    ShipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
