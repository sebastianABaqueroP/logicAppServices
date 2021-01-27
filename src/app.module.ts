import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShipmentSchema } from './shipment/schemas/shipment.schema';
import { ShipmentModule } from './shipment/shipment.module';

@Module({
  imports: [
    // MongooseModule.forRoot(config.mongoUri, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }),
    MongooseModule.forFeature([{ name: 'Shipment', schema: ShipmentSchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/test', {useNewUrlParser: true}),
    ShipmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
