import { ApiProperty } from '@nestjs/swagger';

export class CreateShipmentDTO {
  @ApiProperty() readonly portFrom: string;
  @ApiProperty() readonly portTo: string;
  @ApiProperty() readonly merchandise: string;
  @ApiProperty() readonly price: number;
  @ApiProperty() readonly containerType: string;
  @ApiProperty() readonly insurance: string;
  @ApiProperty() readonly created_at: Date;
}
