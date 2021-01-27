import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShipmentSchema } from './schemas/shipment.schema';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Shipment', schema: ShipmentSchema }]),
  ],
  providers: [ShipmentService],
  controllers: [ShipmentController],
})
export class ShipmentModule {}
