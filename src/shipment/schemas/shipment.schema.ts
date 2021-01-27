import * as mongoose from 'mongoose';

export const ShipmentSchema = new mongoose.Schema({ text: String ,
    portFrom: String,
    portTo: String,
    merchandise: String,
    price: Number,
    containerType: String,
    insurance: String,
    created_at: Date
});
