import * as mongoose from 'mongoose';

export const ProviderSchema = new mongoose.Schema({
    name: String,
    options: Array<any>(),
});