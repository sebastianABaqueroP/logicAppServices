import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ApiQuery } from '@nestjs/swagger';
import { CreateShipmentDTO } from './dto/shipment.dto';

@Controller('shipment')
export class ShipmentController {
  constructor(private readonly ShipmentService: ShipmentService) {}

  /**
   * Posts shipment controller
   * @param res 
   * @param CreateShipmentDTO 
   * @returns  
   */
  @Post('/create') async addCustomer(
    @Res() res,
    @Body() CreateShipmentDTO: CreateShipmentDTO,
  ) {
    const lists = await this.ShipmentService.create(CreateShipmentDTO);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Post has been created successfully', lists });
  }

  /**
   * Gets all shipment controller
   * @param res 
   * @returns  
   */
  @Get('all') async findAll(@Res() res) {
    const lists = await this.ShipmentService.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }

  /**
   * Gets id shipment controller
   * @param res 
   * @param id 
   * @returns  
   */
  @Get('id') async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.ShipmentService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  /**
   * Puts shipment controller
   * @param res 
   * @param id 
   * @param CreateShipmentDTO 
   * @returns  
   */
  @Put('/update') async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateShipmentDTO: CreateShipmentDTO,
  ) {
    const lists = await this.ShipmentService.update(id, CreateShipmentDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Post has been successfully updated', lists });
  }

  /**
   * Deletes shipment controller
   * @param res 
   * @param id 
   * @returns  
   */
  @Delete('/delete') async delete(@Res() res, @Query('id') id: string) {
    const lists = await this.ShipmentService.delete(id);
    if (!lists) throw new NotFoundException('Post does not exist');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Post has been deleted', lists });
  }
}
