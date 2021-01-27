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
  import { ProviderService } from './provider.service';
  import { ApiQuery } from '@nestjs/swagger';
  import { CreateProviderDTO } from './dto/provider.dto';

@Controller('provider')
export class ProviderController {

    constructor(private readonly ProviderService: ProviderService) {}

     /**
   * Posts shipment controller
   * @param res 
   * @param CreateProviderDTO 
   * @returns  
   */
  @Post('/create') async addCustomer(
    @Res() res,
    @Body() CreateProviderDTO: CreateProviderDTO,
  ) {
    const lists = await this.ProviderService.create(CreateProviderDTO);
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
    const lists = await this.ProviderService.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }

  /**
   * Gets id shipment controller
   * @param res 
   * @param id 
   * @returns  
   */
  @Get('id') async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.ProviderService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }

  /**
   * Puts shipment controller
   * @param res 
   * @param id 
   * @param CreateProviderDTO 
   * @returns  
   */
  @Put('/update') async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateProviderDTO: CreateProviderDTO,
  ) {
    const lists = await this.ProviderService.update(id, CreateProviderDTO);
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
    const lists = await this.ProviderService.delete(id);
    if (!lists) throw new NotFoundException('Post does not exist');
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Post has been deleted', lists });
  }
}
