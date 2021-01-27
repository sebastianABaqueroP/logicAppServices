import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { ProviderSchema } from './schemas/provider.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Provider', schema: ProviderSchema }]),
  ],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
