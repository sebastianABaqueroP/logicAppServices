import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipment } from './interfaces/shipment.interface';
import { CreateShipmentDTO } from './dto/shipment.dto';

@Injectable()
export class ShipmentService {
  constructor(@InjectModel('Shipment') private ShipmentModel: Model<Shipment>) {}

  /**
   * Creates shipment service
   * @param createShipmentDTO 
   * @returns create 
   */
  async create(createShipmentDTO: CreateShipmentDTO): Promise<any> {
    const createdCat = new this.ShipmentModel(createShipmentDTO);
    return createdCat.save();
  }

  /**
   * Finds all shipment service
   * @returns all 
   */
  async findAll(): Promise<any> {
    return await this.ShipmentModel.find().exec();
  }

  /**
   * Finds by id shipment service
   * @param id 
   * @returns by id 
   */
  async findById(id): Promise<Shipment> {
    const customer = await this.ShipmentModel.findById(id).exec();
    return customer;
  }

  /**
   * Finds shipment service
   * @param req 
   * @returns find 
   */
  async find(req): Promise<any> {
    return await this.ShipmentModel.find(req).exec();
  }

  /**
   * Updates shipment service
   * @param id 
   * @param createShipmentDTO 
   * @returns update 
   */
  async update(id, createShipmentDTO: CreateShipmentDTO): Promise<any> {
    return await this.ShipmentModel.findByIdAndUpdate(id, createShipmentDTO, {
      new: true,
    });
  }

  /**
   * Deletes shipment service
   * @param id 
   * @returns delete 
   */
  async delete(id): Promise<any> {
    return await this.ShipmentModel.findByIdAndRemove(id);
  }
}
