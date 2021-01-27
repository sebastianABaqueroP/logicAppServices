import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider } from './interfaces/provider.interface';
import { CreateProviderDTO } from './dto/provider.dto';

@Injectable()
export class ProviderService {

    constructor(@InjectModel('Provider') private ProviderModel: Model<Provider>) {}

    /**
     * Creates shipment service
     * @param createProviderDTO 
     * @returns create 
     */
    async create(createProviderDTO: CreateProviderDTO): Promise<any> {
      const createdCat = new this.ProviderModel(createProviderDTO);
      return createdCat.save();
    }
  
    /**
     * Finds all shipment service
     * @returns all 
     */
    async findAll(): Promise<any> {
      return await this.ProviderModel.find().exec();
    }
  
    /**
     * Finds by id shipment service
     * @param id 
     * @returns by id 
     */
    async findById(id): Promise<Provider> {
      const customer = await this.ProviderModel.findById(id).exec();
      return customer;
    }
  
    /**
     * Finds shipment service
     * @param req 
     * @returns find 
     */
    async find(req): Promise<any> {
      return await this.ProviderModel.find(req).exec();
    }
  
    /**
     * Updates shipment service
     * @param id 
     * @param CreateProviderDTO 
     * @returns update 
     */
    async update(id, CreateProviderDTO: CreateProviderDTO): Promise<any> {
      return await this.ProviderModel.findByIdAndUpdate(id, CreateProviderDTO, {
        new: true,
      });
    }
  
    /**
     * Deletes shipment service
     * @param id 
     * @returns delete 
     */
    async delete(id): Promise<any> {
      return await this.ProviderModel.findByIdAndRemove(id);
    }
}
