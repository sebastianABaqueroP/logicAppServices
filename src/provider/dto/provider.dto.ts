import { ApiProperty } from '@nestjs/swagger';

export class CreateProviderDTO {
  @ApiProperty() readonly name: string;
  @ApiProperty() readonly options: Array<Object>;
}